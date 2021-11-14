import {useState, useEffect, createContext} from 'react'
import {getStorage, ref, getDownloadURL} from "firebase/storage"

export const EventBanner = createContext(null)

export const EventBannerContextProvider =({children})=>{

    const [eventBanner, setEventBanner] = useState(null)

    return(
        <EventBanner.Provider
            value={{
                eventBanner, setEventBanner,
            }}
        >
            {children}
        </EventBanner.Provider>
    )
}