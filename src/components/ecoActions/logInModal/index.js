import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { forwardRef } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Link} from 'react-router-dom';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const LogInModal = ({isOpen, handleClose}) =>{ 
    
    return (
        
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
        >
                <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        If you want to subscribe to this event, please log in.
                        </DialogContentText>    
                    </DialogContent>
            <DialogActions>
                <Button component={Link} to='/sign-in'>Log In</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}