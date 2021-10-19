import { createContext, useState, useEffect } from 'react'

import { DATABASE_URL } from '../../firebase-config'

export const UserActivity = createContext({});

export const loadUserActivityData = () => {
   return fetch(`${DATABASE_URL}/users/id1.json`)
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

export const totalCount =(row) => {
    const progressLevel = Object.values(row).filter((value) => typeof value === "boolean" && value === true)
    return progressLevel.length
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