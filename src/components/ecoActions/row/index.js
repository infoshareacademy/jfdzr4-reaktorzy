import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import logo5 from '../../assets/images.png'
import '../../tiles/index.css'
import { useState, useContext} from 'react';
import { SubscribeEventContex } from '../../context/SubscribeContex';
import {LogInModal} from '../logInModal/index'
import './index.css'

export const EcoEventRow =({ecoEvent, newFetch}) =>{
    const {user, isSubscribe, handleStarClick} =useContext(SubscribeEventContex)

    const [isOpen, setIsOpen] = useState(false);
      const handleClickOpen = () => {
        setIsOpen(true);
      };
      const handleClose = () => {
        setIsOpen(false);
      };
    return(
        <>
            <Card className="eventRow-conatiner">
                <CardMedia
                    className="eventRow-image"
                    component="img"
                    alt="Event image"
                    src={ecoEvent.url || logo5} 
                />

                <CardContent>
                    <Typography gutterBottom className="eventRow-title" component="div">
                        {ecoEvent.title} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="eventRow-description">
                       {ecoEvent.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {!!user ? (<div>
                        {
                            isSubscribe(ecoEvent.id) 
                            ? <Button variant="contained" color={'success'} size="small" className="eventRow-button" onClick={()=>handleStarClick(ecoEvent.id)}>
                                Unsubscribes
                              </Button> 
                            : <Button variant="contained" color={'primary'} size="small" className="eventRow-button" onClick={()=>handleStarClick(ecoEvent.id)}>
                                Subscribe
                              </Button> 
                            } 
                            </div>
                    )   :   <Button variant="contained" color={'success'} size="small" className="eventRow-button" onClick={handleClickOpen}>
                                Subscribe
                            </Button>
                    }
                    <Button className="eventRow-button" component={Link} to={`/eco-actions/${ecoEvent.id}`}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <LogInModal isOpen={isOpen} handleClose={handleClose}/>
            </>
    )
}


