import Button from '@mui/material/Button';
import {useState, useEffect, useContext} from 'react'
import { AddEcoEvent } from './addForm';
// import { DATABASE_URL } from '../../firebase-config';
import { EcoEventRow } from './row/index';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoadingEvents } from './loading';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { SubscribeEventContex } from '../context/SubscribeContex';
import './index.css'
import Typography from '@mui/material/Typography';
import { EventsContex } from '../context/EventContext';

export const EcoActions = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {ecoEvents, fetchEvents} = useContext(EventsContex)
    const {user, fetchSubscribeEvents} = useContext(SubscribeEventContex)

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClickClose = () => {
        setIsOpen(false);
    };

    useEffect(()=>{
        fetchEvents()
        fetchSubscribeEvents()
    }, [user])

    return (
        <>  
            <Box className="green-event-title">
                <Typography component="div" gutterBottom className="green-event-title-content"> Green events...</Typography>
            </Box>
            <Box  className="green-event-container">
                <Grid className="grid-event-container" >
                    {
                        ecoEvents  
                        ? ecoEvents.map(ecoEvent => {
                            return (
                                <Grid>
                                    <EcoEventRow key={ecoEvent.id} newFetch={fetchEvents} ecoEvent={ecoEvent} isOpen={isOpen} handleClickClose={handleClickClose} handleClickOpen={handleClickOpen}
                                    />
                                </Grid>
                            )
                        })
                        : <LoadingEvents/>
                    } 
                </Grid>
            </Box> 
            <Box className="addEvent-button">
                {!!user && (<Button variant="contained" color="warning" onClick={handleClickOpen}>
                        Add Event
                        <AddCircleIcon/>
                    </Button> )}
            </Box>             
            {user && <AddEcoEvent isOpen={isOpen} handleClickClose={handleClickClose} fetchEvents={fetchEvents}/>}
        </>
    )
}