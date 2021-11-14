import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { forwardRef, useState, useContext, useEffect } from 'react';
import { DATABASE_URL } from '../../../firebase-config';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Typography from '@mui/material/Typography';
import './index.css'
import { SubscribeEventContex } from '../../context/SubscribeContex';
import { EventBanner } from '../../context/EventImage';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const AddEcoEvent = ({isOpen, handleClickClose, fetchEvents}) =>{


    const {user} = useContext(SubscribeEventContex)
    const [eventBanner, setEventBanner] = useState(null)
    const [file, setFile] =useState(null)
    
    const [ecoEvents, setEcoEvents] = useState({
        title: '',
        description: '',
        author: user.uid,
        url: ''
    })

    const handleFile = (event) => {
        setFile(event.target.files[0]);
    }
    const handleCancel = ()=>{
        handleClickClose()
        setFile(null)
    }
    const handleOnChange = (e) =>{
        setEcoEvents({
            ...ecoEvents,
            [e.target.name]: e.target.value,
        })
    }     

    const addBanner =()=>{
        const storage = getStorage();
        const storageRef = ref(storage, `banners/${file.name}`) 
       return uploadBytes(storageRef, file).then((snapshot) => {
            setFile(null);
            return getDownloadURL(storageRef).then(url=>{
                return url
            })
        })
    }

    const handleSubmit =()=>{
        addBanner().then((url) =>{

            fetch(`${DATABASE_URL}/ecoEvents.json`,{
                method: 'POST', 
                body: JSON.stringify({...ecoEvents, url})
            }).then(()=>{
                handleClickClose();
                setFile(null)
                fetchEvents();
                setEcoEvents({
                    title: '',
                    description: ''
                });
        })
        })
           
    }

    return (
        <>
         { user && (<Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
        >
                <DialogTitle>Add your event</DialogTitle>
                    
                        <TextField color='success' label="Title" id="title" name='title' 
                        value={ecoEvents.title} 
                        onChange={handleOnChange}
                        inputProps={{ maxLength: 25 }}
                        required
                        className="textField-addEvent"
                        />
                        <TextField
                            color='success'
                            value={ecoEvents.description} 
                            name='description'
                            id="Description"
                            label="Description"
                            placeholder="Description"
                            multiline
                            rows={6}
                            className="textField-addEvent"
                            onChange={handleOnChange}
                            required
                        />
                    <Box>
                        <Button variant="contained" color='primary' component="label" className='button-addEvent-image'>
                            <AttachFileIcon /> 
                                Add Image
                                <input type="file" hidden onChange={handleFile}/>
                        </Button>
                        {
                            file && (
                                <Typography variant="body">{file.name}</Typography>
                            )
                        }
                    </Box>
            <DialogActions>
                <Button onClick={handleSubmit} className="event-button-group" variant="contained" color='primary'>Add event</Button>
                <Button onClick={handleCancel} className="event-button-group" >Cancel</Button>
            </DialogActions>
            <br/>
                        {eventBanner}
        </Dialog>)}
        </>
    );
}