import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "@firebase/storage";


export const UserContext = createContext({});

export const UserActivityProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    listenOnAuthStateChanged();
  }, []);

  const listenOnAuthStateChanged = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        setUserName(user.email);
        const storage = getStorage();
        const storageRef = ref(storage, `avatar/${user.uid}`);

        getDownloadURL(storageRef)
          .then(url => setAvatarUrl(url))
          .catch(err => {

          })
      } else {
        setAvatarUrl(null);
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: user,
        userName,
        avatarUrl,
        setAvatarUrl
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
