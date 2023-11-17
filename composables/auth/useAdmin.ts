export function useAdmin() {
  const authUser = useAuthUser()

  return computed(() => {
    if (!authUser.value)
      return false

    return authUser.value.role === 'ADMIN'
  })
}
