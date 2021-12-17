import { createContext, useContext } from "react";
import { useUser } from "./useUserNode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { session: user } = useUser();
    console.log(user);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuthProvider() {
  const user = useContext(AuthContext);
  return user;
}
