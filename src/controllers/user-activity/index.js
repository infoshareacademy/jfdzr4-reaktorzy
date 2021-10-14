import { createContext, useState, useEffect } from 'react'
import { DATABASE_URL } from '../../firebase-config'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserActivity = createContext({});

export const UserActivityProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userActivityDate, setUserActivityDate] = useState({})
    
    const userName = 'Richard'

    useEffect(() => {
        listenOnAuthStateChanged();

        fetch(`${DATABASE_URL}/users.json`)
            .then(r => r.json())
            .then(data => {
                if (data) {
                    const date = data.id123
                    console.log(date)
                    setUserActivityDate(date)
                }
            })
    }, [])

    const listenOnAuthStateChanged = () => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            setUser(user);

            if (user) {
                console.log(user)
       
            } 
        });
    }

    return <UserActivity.Provider value={{
        userActivityDate,
        setUserActivityDate,
        isLoggedIn: user,
        userName
    }}>
        {children}
    </UserActivity.Provider>
}