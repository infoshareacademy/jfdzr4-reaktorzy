import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { createContext, useEffect, useState } from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth";


export const EventBannerContex = createContext(null)

export const EventContexProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [eventBanner, setEventBanner] = useState(null)

    useEffect(() => {
        const auth = getAuth();
        const storage = getStorage();
    
        onAuthStateChanged(auth, (user) => {
            setUser(user);
    
            if (user) {
                const storageRef = ref(storage, `eventBanner/${user.uid}`);
                getDownloadURL(storageRef)
                    .then(url => setEventBanner(url))
            } else {
                setEventBanner(null);
            }
        });
    }, [])

    return (
    <EventBannerContex.Provider value ={
        {   user,
            // ecoEvent,
            eventBanner,
            setEventBanner
        }
    }>
        {children}
    </EventBannerContex.Provider>
    )
}