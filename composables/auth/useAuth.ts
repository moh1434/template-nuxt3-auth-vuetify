import { UserI } from "~~/types";
import { useAuthUser } from "./useAuthUser";

export const useAuth = () => {
  const authUser = useAuthUser();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  // const setCookie = (cookie: any) => {
  //   cookie.value = cookie;
  // };

  const login = async (username: string, password: string) => {
    const { result } = await useWrapFetch<UserI>("auth/login", {
      method: "POST",
      body: {
        username,
        password,
      },
    });
    if (!result) return;

    setUser(result);

    return authUser;
  };

  const logout = async () => {
    const { result, error } = await useWrapFetch<UserI>(`/auth/signout`);
    if (error) {
      return;
    }

    setUser(result);
    return true;
  };

  const me = async () => {
    if (!authUser.value) {
      const { result } = await useWrapFetch<UserI>("/auth/me", {}, null);
      if (!result) {
        // setCookie(null)
        return;
      }
      setUser(result);
    }

    return authUser;
  };

  return {
    login,
    logout,
    me,
  };
};
