import { createContext, useEffect, useState } from "react"
import { DATABASE_URL } from '../../firebase-config';



export const EventsContex = createContext(null)

export const EventContexProvider = ({children}) =>{
    
const [ecoEvents, setEcoEvents] = useState()

const fetchEvents = () => {
    fetch(`${DATABASE_URL}/ecoEvents.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
            setEcoEvents(formattedData);
        })          
}
    return (
    <EventsContex.Provider value ={
        {   ecoEvents,
            setEcoEvents,
            fetchEvents
        }
    }>
        {children}
    </EventsContex.Provider>
    )
}