import Typography  from "@mui/material/Typography"
import logo5 from '../../assets/images.png'
import Button  from "@mui/material/Button"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom'
import '../../ecoActions/row/index.css'
import { useContext, useEffect } from "react";
import { SubscribeEventContex } from "../../context/SubscribeContex";
import { DATABASE_URL } from "../../../firebase-config";


export const ProfileEvents = ({ecoEvent, newPromise}) =>{

    const {user, fetchSubscribeEvents, subscribeEvents, setSubscribeEvents} = useContext(SubscribeEventContex)


    const newFetch = (data)=> fetch(`${DATABASE_URL}/subscribeEvents/${user.uid}.json`, {
                method: 'PUT',
                body: JSON.stringify(data)
            })
            .then(() => {
                newPromise()
                // fetchSubscribeEvents()
                console.log(ecoEvent.title)
                console.log(ecoEvent.description)
            })


    const handleRemoveSubEvent = (ecoEventId) => {
        Promise.all([
            fetch(`${DATABASE_URL}/subscribeEvents/${user.uid}.json`)
                        .then(r => r.json())
                        .then(data => {
                            const newData = data.filter(id => id !== ecoEventId)
                            newFetch(newData)
                            // fetchSubscribeEvents()
                        })
                    ])
        }

    return (
        <div>
            <Card className="eventRow-conatiner">
                <CardMedia  className="eventRow-image" component="img" alt="Event image"
                    src={ecoEvent.url || logo5}
                            />
                <CardContent>
                    <Typography gutterBottom component="div" className="eventRow-title" >
                        {ecoEvent.title} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="eventRow-description" >
                    {ecoEvent.description}
                    </Typography>
                </CardContent>
                <CardActions>
                
                    <Button variant="contained" color={'success'} onClick={()=>handleRemoveSubEvent(ecoEvent.id)} className="eventRow-button">Unsubscribes</Button> 
                    <Button className="eventRow-button" component={Link} to={`/eco-actions/${ecoEvent.id}`}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}