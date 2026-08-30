import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AUTH_KEY = "eventboard_auth";


export const DEMO_EMAIL = "guest@eventboard.demo";
export const DEMO_PASSWORD = "eventboard123";

const getStoredUser = () => {
  const raw = localStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
};

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }, [user]);

  const login = (email, password) => {
    if (email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setUser({ email: DEMO_EMAIL });
      return { ok: true };
    }
    return { ok: false, error: "Incorrect email or password." };
  };

  const logout = () => setUser(null);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
