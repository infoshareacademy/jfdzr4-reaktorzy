import Typography  from "@mui/material/Typography"
import { useContext, useEffect} from "react"
import { DATABASE_URL} from "../../firebase-config"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SubscribeEventContex } from "../context/SubscribeContex"
import { LogOutProfil } from "./profilLogOut"
import '../ecoActions/index.css'
import '../ecoActions/row/index.css'
import { ProfileEvents } from "./profileEvents"
import { ActivityChart } from "../activityChart";
import { ScoreTable } from "../scoreTable";


export const Profile = () => {
 
    const {user, subscribeEvents, setSubscribeEvents} = useContext(SubscribeEventContex)

    useEffect(()=>{
        if(user){
        Promise.all([
            fetch(`${DATABASE_URL}/ecoEvents.json`)
            .then(r => r.json()),
            fetch(`${DATABASE_URL}/subscribeEvents/${user.uid}.json`)
            .then(r => r.json())
        ]).then(([data, favouriteIds])=> {
            const formattedData = Object.keys(data).map(key => ({id:key, ...data[key]}));
            const filteredEvents = formattedData.filter(ecoEvent => (favouriteIds || []).includes(ecoEvent.id));
            setSubscribeEvents(filteredEvents)
        })
        }
    }, [user])
    return (
        <>
       { !! user 
            ? (<div>
                <Box className="green-event-title">
                    <Typography className="green-event-title-content">Your subscribes</Typography>
                        { 
                            subscribeEvents.length === 0 && <Typography variant="body" className="green-event-title-content">
                                You haven't subscribes events
                                </Typography>
                        } 
                    </Box>
                    <Box className="green-event-container" >
                        <Grid className="grid-event-container" >
                            {subscribeEvents.map(ecoEvent => 
                                <Grid>
                                    <ProfileEvents key={ecoEvent.id} ecoEvent={ecoEvent}/>
                                </Grid>
                            )}
                        </Grid>
                    </Box> 
                </div>)
            : <LogOutProfil/>}
        </>

    )
}
                      <Button
                        className="eventRow-button"
                        component={Link}
                        to={`/eco-actions/${ecoEvent.id}`}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      ) : (
        <LogOutProfil />
      )}
    </>
  );
};
