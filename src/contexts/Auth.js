import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const AuthContext = () => useContext(Context);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = (email, password) => {
    if (email) {
      setUsername(email.split(/\@.*$/));
      setIsLoggedIn(true);
    }
  };

  const LogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Context.Provider value={{ isLoggedIn, logIn, LogOut, username }}>
      {children}
    </Context.Provider>
  );
};
