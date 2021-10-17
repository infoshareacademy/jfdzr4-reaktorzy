import { createContext, useState, useEffect } from 'react'

import { DATABASE_URL } from '../../firebase-config'

export const UserActivity = createContext({});

export const loadUserActivityData = () => {
   return fetch(`${DATABASE_URL}/users/id1.json`)
        .then(r => r.json())
        .then(data => {
            if (data) {
                const formattedData = Object.keys(data).map(key => ({ date: key, ...data[key] }));
                return (formattedData.slice(-10))
            }
        })
}

export const loadUserActivityCurrentDate = (date) => {
    return fetch(`${DATABASE_URL}/users/id1/${date}.json`)
        .then(r => r.json())
        .then(data => {
            if (data) {
                console.log('sa dane')
                return (data)
            }
            return undefined
        })
}

export const UserActivityProvider = ({ children }) => {

    const [userActivityDate, setUserActivityDate] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const userName = 'Richard'



    return <UserActivity.Provider value={{
        userActivityDate,
        loadUserActivityData,
        setUserActivityDate,
        isLoggedIn,
        setIsLoggedIn,
        userName
    }}>
        {children}
    </UserActivity.Provider>
}