<script lang="ts" setup>
// Icons are from: https://materialdesignicons.com/
import { mdiHumanGreetingVariant } from '@mdi/js'

// definePageMeta({
//   middleware: [],
// })
const currentUser = useAuthUser()
</script>

<template>
  <div>
    <v-btn
      :prepend-icon="mdiHumanGreetingVariant"
      color="blue-darken-1"
    >
      test vuetify
    </v-btn>
    <h1 class="tw-my-3 tw-p-3 tw-text-3xl tw-bg-pink-300">
      test tailwind
    </h1>
    <img
      src="imgs/avatar1.jpg"
      alt="no image"
      class="w-25"
    >
    <p>current user:{{ currentUser }}</p>
  </div>
</template>
