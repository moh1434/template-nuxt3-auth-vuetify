import { useAuthUser } from './useAuthUser'
import type { UserI } from '~~/types'

export function useAuth() {
  const authUser = useAuthUser()

  const setUser = (user: any) => {
    authUser.value = user
  }

  // const setCookie = (cookie: any) => {
  //   cookie.value = cookie;
  // };

  const login = async (username: string, password: string) => {
    const loginResponse = await useWrapFetch<UserI>('/auth/login/', {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
    if (!loginResponse.data.value)
      return

    setUser(loginResponse.data.value)

    return authUser
  }

  const logout = async () => {
    const response = await useWrapFetch<UserI>('/auth/signout/')
    if (response.error.value)
      return

    setUser(response.data.value)
    return true
  }

  const me = async () => {
    if (!authUser.value) {
      const response = await useWrapFetch<UserI>('/auth/me/', {}, null)
      if (!response.data.value) {
        // setCookie(null)
        return
      }
      setUser(response.data.value)
    }

    return authUser
  }

  return {
    login,
    logout,
    me,
  }
}
