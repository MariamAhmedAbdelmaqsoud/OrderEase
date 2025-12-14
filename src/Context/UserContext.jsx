import { createContext, useEffect } from "react";
import { useState } from "react";
export let UserContext = createContext();
export function UserProvider({ children }) {
  let [userLogin, setuserLogin] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setuserLogin(localStorage.getItem("userToken"));
    }
  }, []);
  return (
    <UserContext.Provider value={{ userLogin, setuserLogin }}>
      {children}
    </UserContext.Provider>
  );
}
