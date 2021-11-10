import "../../ecoActions/index.css"
import Typography  from "@mui/material/Typography"
import Box from '@mui/material/Box';

import {Link} from 'react-router-dom';


export const LogOutProfil = () =>{ 
    
    return (
        <Box className="green-event-title">
            <Typography className="green-event-title-content">Please <Link to='/sign-in'className="link">Log in</Link></Typography>
        </Box>
    )
}
