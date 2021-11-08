import { useContext, useEffect, useState } from "react"
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { DATABASE_URL } from "../../../firebase-config";
import {LoadingEvents} from '../loading'
import Button  from "@mui/material/Button";
import logo5 from '../../assets/images.png'
import { SubscribeEventContex } from "../../context/SubscribeContex";
import {LogInModal} from '../logInModal/index'
import './index.css'



export const EventDetails = (props) =>{

    const params = useParams()
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

    const fetchEvents = () => {
      fetch(`${DATABASE_URL}/ecoEvents.json`)
          .then(r => r.json())
          .then(data => {
              const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
              setEcoEvent(formattedData);
          })          
  }
  const onButtonBackClick = () => {
    props.history.push('/eco-actions');
}

    const handleDeleted = () => {
      fetch(`${DATABASE_URL}/ecoEvents/${params.id}.json`, {
          method: 'DELETE'
      }).then(() => {
        fetchEvents();
        onButtonBackClick()
      })
    }
 
    return(
      <>
      <div className="eventDetails-component">
        <div className="eventDetails-container">
              {
                ecoEvent ? (
              <div style={{display: 'flex'}}>
                <div>
                      <img className="eventDetails-image" alt='Event image'src={ecoEvent.url || logo5} />
                </div>
                  <div className="eventDetails-content">
                      <div>
                        <h1 variant="caption" className="eventDetails-title">{ecoEvent.title}</h1>
                        <p variant="caption" className="eventDetails-description">
                          {ecoEvent.description}
                        </p>
                      </div>
                      <div className="eventDetails-button-container">
                          {!!user ? (
                              <div>
                                {
                                isSubscribe(params.id) ? <Button className="eventDetails-button" style={{marginRight: 5}} variant="contained" color={'success'} size="small" onClick={()=>handleStarClick(params.id)}>Unsubscribes</Button> 
                                    : <Button variant="contained" color={'primary'} style={{marginRight: 5}} className="eventDetails-button" size="small"  onClick={()=>handleStarClick(params.id)}>Subscribe</Button> 
                                } 
                                <Button variant="contained" onClick={handleDeleted} size="small" color={'primary'} className="eventDetails-button">delete</Button>
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
      </div>
      <LogInModal isOpen={isOpen} handleClose={handleClose}/>
    </>
    )
}
