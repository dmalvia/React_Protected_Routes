import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  }
  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  }
  return [isAuth, login, logout];
}
