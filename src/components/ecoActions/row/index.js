import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

import logo5 from '../../assets/images.png'
import { useState } from 'react';
import '../../tiles/index.css'



export const EcoEventRow =({ecoEvent}) =>{

    const [flag, setFlag] = useState(true)

    const handlerFlag = ()=>{
        setFlag(!flag)
    }

    return(
        <>
        
            <Card sx={{ maxWidth: 345}} className={'ecoEvent'}>
                <CardMedia
                    component="img"
                    height="160"
                    alt="Event image"
                    src={ecoEvent.url || logo5}
        
                />
                <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div" sx={{height: 60}} >
                        {ecoEvent.title} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{height: 80, overflow: 'hidden'}}>
                       {ecoEvent.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" 
                    color={ flag ? 'primary' : 'success'}
                         size="small" onClick={handlerFlag}>Subscribe</Button>
                    <Button size="small" onClick={()=>console.log('learn more')}>
                    <Link to={`/eco-actions/${ecoEvent.id} `} >Learn More</Link>
                        </Button>
                </CardActions>
            </Card>
            </>
    )
}


