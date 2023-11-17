<script setup lang="ts">
import { mdiClose } from '@mdi/js'

const { alertsList, clearAlert } = useAlerts()
</script>

<template>
  <div class="alert-handler">
    <ClientOnly>
      <div
        v-for="(alertList, type) in alertsList"
        :key="type"
      >
        <v-alert
          v-for="alert in alertList"
          :key="alert.id"
          :type="type"
          class="tw-mb-5"
        >
          {{ alert.message }}
          <template #close>
            <v-btn
              icon
              @click="clearAlert(alert.id)"
            >
              <v-icon
                size="large"
                :icon="mdiClose"
              />
            </v-btn>
          </template>
        </v-alert>
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.alert-handler {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;

  max-width: 36rem;
  width: 100%;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  z-index: 1011;
}
</style>
