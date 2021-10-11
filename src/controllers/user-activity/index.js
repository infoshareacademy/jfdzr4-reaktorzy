import { createContext, useState, useEffect } from 'react'

import { DATABASE_URL } from '../../firebase-config'

export const UserActivity = createContext({});

export const UserActivityProvider = ({ children }) => {

    const [userActivityDate, setUserActivityDate] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const userName = 'Richard'

    useEffect(() => {
        fetch(`${DATABASE_URL}/users/id1.json`)
            .then(r => r.json())
            .then(data => {
                if (data) {
                    const formatedData = Object.keys(data).map(key => ({ date: key, ...data[key] }));
                    console.log(formatedData)
                    setUserActivityDate(formatedData)
                }
            })
    }, [])

    return <UserActivity.Provider value={{
        userActivityDate,
        setUserActivityDate,
        isLoggedIn,
        setIsLoggedIn,
        userName
    }}>
        {children}
    </UserActivity.Provider>
}