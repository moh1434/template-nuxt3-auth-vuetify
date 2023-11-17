<script lang="ts" setup>
const currentUser = useAuthUser()
// const isAdmin = useAdmin()
const { logout } = useAuth()

const form = reactive({
  pending: false,
})

const drawer = ref<boolean | null>(null)

async function onLogoutClick() {
  try {
    form.pending = true

    await logout()

    await navigateTo({ name: 'index' })
  }
  catch (error) {
    console.error(error)
  }
  finally {
    form.pending = false
    drawer.value = false
  }
}
</script>

<template>
  <v-app id="inspire">
    <AlertHandler />
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          :to="{ name: 'index' }"
          :exact="true"
        >
          Home
        </v-list-item>
        <template v-if="currentUser">
          <v-list-item
            :disabled="form.pending"
            @click="onLogoutClick"
          >
            Logout
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item :to="{ name: 'login' }">
            Login
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>My Website</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <VContainer fluid>
        <slot />
      </VContainer>
    </v-main>
  </v-app>
</template>
