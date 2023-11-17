import type { UserI } from '~~/types'

export function useAuthUser() {
  return useState<UserI | null>('user', () => null)
}
