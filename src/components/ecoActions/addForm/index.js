import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { forwardRef, useState } from 'react';
import { DATABASE_URL } from '../../../firebase-config';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import {uploadBytes, getStorage, getDownloadURL, ref} from 'firebase/storage'



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const AddEcoEvent = ({isOpen, handleClickClose, fetchEvents}) =>{

    const [file, setFile] =useState(null)
    const [ecoEvents, setEcoEvents] = useState({
        title: '',
        description: '',
        url: ''
    })
    const handleFile = (event) => {
        setFile(event.target.files[0]);
    }

    const handleOnChange = (e) =>{
        setEcoEvents({
            ...ecoEvents,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit =(e)=>{
        fetch(`${DATABASE_URL}/ecoEvents.json`,{
            method: 'POST',
            body: JSON.stringify(ecoEvents)
        }).then(()=>{
            handleClickClose()
            fetchEvents()
        })
    }
  
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
        >
                <DialogTitle>Add your event</DialogTitle>
                    <Box sx={{ width: 500, maxWidth: '100%', margin: '10px'}} >
                    <TextField color='success' fullWidth label="Title" id="title" name='title' 
                       value={ecoEvents.title} 
                       onChange={handleOnChange}
                       inputProps={{ maxLength: 20 }}
                       required
                    />
                    </Box>
                    <TextField
                        color='success'
                        value={ecoEvents.description} 
                        name='description'
                        id="Description"
                        label="Description"
                        placeholder="Description"
                        multiline
                        rows={6}
                        sx={{ width: 500, maxWidth: '100%',margin: '10px'}} 
                        onChange={handleOnChange}
                        required
                    />
                    <Button variant="contained" color='success' component="label" sx={{ width: 500, maxWidth: '100%',margin: '10px'}} >
                        <AttachFileIcon /> 
                            Add Image
                            <input type="file" hidden onChange={handleFile}/>
                    </Button>
            <DialogActions>
                <Button onClick={handleSubmit} variant="contained" color='success'>Add event</Button>
                <Button onClick={handleClickClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}