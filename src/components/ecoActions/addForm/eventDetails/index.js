import { useEffect, useState } from "react"
import { Redirect } from "react-router"
import { useParams } from 'react-router-dom';
import { DATABASE_URL } from "../../../../firebase-config";
import {LoadingEvents} from '../../loading'
import logo5 from '../../../assets/images.png'
import { EcoEventRow } from "../../row";

export const EventDetails = () =>{
  
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [ecoEvent, setEcoEvent] = useState(null)
    const [shouldRedirect, setShouldRedirect] = useState(false);
    

    useEffect(()=>{
      fetch(`${DATABASE_URL}/ecoEvents/${params.id}.json`)
        .then(r => r.json())
        .then(data=> {
          setEcoEvent(data);
          setIsLoading(false)
          console.log(data)
        })
    }, [params])
  
    if (isLoading) {
      return <LoadingEvents/>
  }

  const handleRedirect = () =>{
    setShouldRedirect(true)
  }
  if (shouldRedirect) {
    return <Redirect to="/eco-actions"/>
  }
    return(
      <>
      <button onClick={handleRedirect}>Back</button>
      <div style={{backgroundColor: 'greenyellow' , width: 900, margin: 'auto', marginTop: 50}}>
            
            {
              ecoEvent && (
                <div style={{display: 'flex'}}>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img width={300} height={300} alt="ecoEvent" 
                    src={ecoEvent.url || logo5} />
              </div>
                    <div style={{marginLeft: 5}}>
              <h1 variant="caption" style={{textAlign: 'center' }}>{ecoEvent.title}</h1>
                <p variant="caption" style={{textIndent: '1.5em'}}>
                  {ecoEvent.description}
                </p>
                </div>
            </div>
              )
            }

      </div>
      </>
    )
}
