import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext({});

export const UserActivityProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    listenOnAuthStateChanged();
  }, []);

  const listenOnAuthStateChanged = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        setUserName(user.email);
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: user,
        userName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
