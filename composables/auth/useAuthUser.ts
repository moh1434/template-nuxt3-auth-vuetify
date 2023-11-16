import type { UserI } from '~~/types';

export const useAuthUser = () => {
  return useState<UserI | null>('user', () => null);
};
