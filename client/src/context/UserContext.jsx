import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/profile").then((data) => {
      setUser(data.data);
    });
  }, []); // The empty array ensures this effect runs only once

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
