import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { forwardRef, useState, useContext } from 'react';
import { DATABASE_URL } from '../../../firebase-config';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Typography from '@mui/material/Typography';
import './index.css'
import { SubscribeEventContex } from '../../context/SubscribeContex';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const AddEcoEvent = ({isOpen, handleClickClose, fetchEvents}) =>{

    const {user} = useContext(SubscribeEventContex)
    const [file, setFile] =useState(null)
    const [ecoEvents, setEcoEvents] = useState({
        title: '',
        description: '',
        author: ''
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
            setEcoEvents({
                title: '',
                description: ''
            })
        })
    }
 
    return (
        <Dialog
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
                        
                        sx={{ margin: '10px'}}
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
                            sx={{margin: '10px'}} 
                            onChange={handleOnChange}
                            required
                        />
                       <input type="text" hiddenv/>
                    <Box>
                        <Button variant="contained" color='primary' component="label" className='button-addEvent-image'sx={{margin: '10px'}}>
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
                <Button onClick={handleSubmit} variant="contained" color='primary'>Add event</Button>
                <Button onClick={handleClickClose}>Cancel</Button>
            </DialogActions>
            
        </Dialog>
    );
}