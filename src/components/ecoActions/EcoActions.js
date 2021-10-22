import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import { AddEcoEvent } from './addForm';
import { DATABASE_URL } from '../../firebase-config';
import { EcoEventRow } from './row/index';
import {getStorage, ref, getDownloadURL} from "firebase/storage";



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoadingEvents } from './loading';



export const EcoActions = () => {

    const [ecoEvents, setEcoEvents] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClickClose = () => {
        setIsOpen(false);
    };

    const fetchEvents = () => {
        fetch(`${DATABASE_URL}/ecoEvents.json`)
            .then(r => r.json())
            .then(data => {
                const formattedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
                setEcoEvents(formattedData);
            });
    }

    useEffect(()=>{
        fetchEvents()
    }, [])

    return (
        <>  
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>Green events...</h1>
                <Button variant="contained" color="success" sx={{height: 40}} onClick={handleClickOpen}>
                Add Event
            </Button>
            </div>
           
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={3}  style={{ margin: 0}}>
                    {
                        ecoEvents  
                        ? ecoEvents.map(ecoEvent => {
                            return (
                                <Grid item xs={4}>
                                    <EcoEventRow ecoEvent={ecoEvent} />
                                    </Grid>
                            )
                        })
                        : <LoadingEvents/>
                    } 
                </Grid>
            </Box>   
            <div style={{position: 'fixed', bottom: '10px', left: '1150px'}}>
                <Button variant="contained" color="warning" onClick={handleClickOpen}>
                    Add Event
                </Button>  
            </div>     
            
            <AddEcoEvent isOpen={isOpen} handleClickClose={handleClickClose} fetchEvents={fetchEvents} />
        </>
    )
}


