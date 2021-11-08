import { createContext, useState, useEffect } from "react"
import { DATABASE_URL } from "../../firebase-config"
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {ref} from "firebase/storage";
export const SubscribeEventContex = createContext(null)

export const SubscribeEventProvider =({children})=>{

    const [user, setUser] = useState(null)

    const [subscribeEvents, setSubscribeEvents] = useState([])

   
    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
    }, [])
    const fetchSubscribeEvents= () => {
        if(user){
            fetch(`${DATABASE_URL}/subscribeEvents/${user.uid}.json`)
                .then(r => r.json())
                .then(data => {
                    if (data) {
                        setSubscribeEvents(data);
                    } else {
                        setSubscribeEvents([]);
                    }
                })
        }
     
}

const isSubscribe= (eventId) => {
    return subscribeEvents.includes(eventId)
}

const handleFavourite = (eventId) => {
    const data = isSubscribe(eventId)
        ? subscribeEvents.filter(id => id !== eventId)
        : [...subscribeEvents, eventId]

    fetch(`${DATABASE_URL}/subscribeEvents/${user.uid}.json`, {
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(() => {
        fetchSubscribeEvents()
    })
}

    const handleDelete = (eventId) =>{
        console.log(eventId)
        }
    
    const handleStarClick = (ecoEventId) => {
            handleFavourite(ecoEventId)

        }

    return(
        <SubscribeEventContex.Provider value={{user, subscribeEvents, setSubscribeEvents, fetchSubscribeEvents, isSubscribe, handleDelete, handleFavourite, handleStarClick}}>
            {children}
        </SubscribeEventContex.Provider>
    )
}