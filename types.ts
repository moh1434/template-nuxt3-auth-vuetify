export type UserI = {
  id: string;
  username: string;
  role: "USER" | "ADMIN";
  logo: string;
  institution_id: number;
};
