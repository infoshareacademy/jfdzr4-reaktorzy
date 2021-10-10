import { createContext, useState, useEffect } from 'react'

import { DATABASE_URL } from '../../firebase-config'

export const UserActivity = createContext({});

export const UserActivityProvider = ({ children }) => {

    const [userActivityDate, setUserActivityDate] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    
    const userName = 'Richard'

    useEffect(() => {
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