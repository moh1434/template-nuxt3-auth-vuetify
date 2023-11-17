<script lang="ts" setup>
definePageMeta({
  middleware: ['guest-only'],
})

// const currentUser = useAuthUser()
const isAdmin = useAdmin()

async function onLoginSuccess() {
  const routeName = isAdmin.value ? 'index' : 'index'

  await navigateTo({ name: routeName })
}
</script>

<template>
  <div>
    <FormLogin @success="onLoginSuccess" />
  </div>
</template>
