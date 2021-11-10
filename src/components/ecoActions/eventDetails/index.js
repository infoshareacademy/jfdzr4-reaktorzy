import { useContext, useEffect, useState } from "react"
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { DATABASE_URL } from "../../../firebase-config";
import {LoadingEvents} from '../loading'
import Button  from "@mui/material/Button";
import logo5 from '../../assets/images.png'
import { SubscribeEventContex } from "../../context/SubscribeContex";
import {LogInModal} from '../logInModal/index'
import './index.css'
import { EventsContex } from "../../context/EventContext";



export const EventDetails = (props) =>{

    const params = useParams()
    const {fetchEvents} = useContext(EventsContex)
    const [isLoading, setIsLoading] = useState(true);
    const [ecoEvent, setEcoEvent] = useState(null)
    const {user, isSubscribe, handleStarClick} =useContext(SubscribeEventContex)

    const [isOpen, setIsOpen] = useState(false);
    const handleClickOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
    };

    useEffect(()=>{
      fetch(`${DATABASE_URL}/ecoEvents/${params.id}.json`)
        .then(r => r.json())
        .then(data=> {
          setEcoEvent(data);
          setIsLoading(false)
        })
    }, [params])
  
    if (isLoading) {
      return <LoadingEvents/>
    }

  //   const fetchEvents = () => {
  //     fetch(`${DATABASE_URL}/ecoEvents.json`)
  //         .then(r => r.json())
  //         .then(data => {
  //             const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
  //             setEcoEvents(formattedData);
              
  //         })          
  // }
  const onButtonBackClick = () => {
    props.history.push('/eco-actions');
}

    const handleDeleted = () => {
      fetch(`${DATABASE_URL}/ecoEvents/${params.id}.json`, {
          method: 'DELETE'
      }).then(() => {
        fetchEvents();
        onButtonBackClick();
      })
    }
 
    return(
      <>
      <div className="eventDetails-component">
              {
                ecoEvent ? ( 
              <div className="eventDetails-container">
                <div>
                      <img className="eventDetails-image" alt='Event image'src={ecoEvent.url || logo5} />
                </div>
                  <div className="eventDetails-content">
                      <div>
                        <h1 variant="caption" className="eventDetails-title">{ecoEvent.title}</h1>
                        <p variant="caption" className="eventDetails-description">
                          {ecoEvent.description}
                        </p>
                        <p>{ecoEvent.id}</p>
                      </div>
                      <div>
                          {!!user ? (
                              <div className="eventDetails-button-container">
                              {(ecoEvent.author === user.uid ) && <Button variant="contained" onClick={handleDeleted} color={'primary'} className="eventDetails-button">delete</Button>}
                                {
                                isSubscribe(params.id) ? <Button className="eventDetails-button" variant="contained" color={'success'}
                                 onClick={()=>handleStarClick(params.id)}>Unsubscribes</Button> 
                                    : <Button variant="contained" color={'primary'} className="eventDetails-button" onClick={()=>handleStarClick(params.id)}>Subscribe</Button> 
                                } 
                               
                              </div>
                                  )   
                          :  <Button variant="contained" color={'success'} size="small" className="eventDetails-button" onClick={handleClickOpen}>Subscribe</Button>
                          }
                    </div>
                    </div>
                  </div>
                )
                : <LoadingEvents/>
              }
      </div>
      <LogInModal isOpen={isOpen} handleClose={handleClose}/>
    </>
    )
}
