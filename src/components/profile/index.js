import { ActivityChart } from "../activityChart";
import { ScoreTable } from "../scoreTable";

import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { DATABASE_URL } from "../../firebase-config";
import logo5 from "../assets/images.png";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { SubscribeEventContex } from "../context/SubscribeContex";
import { LogOutProfil } from "./profilLogOut";
import "../ecoActions/index.css";
import "../ecoActions/row/index.css";

export const Profile = () => {
  const { user, subscribeEvents, setSubscribeEvents, handleDelete } =
    useContext(SubscribeEventContex);

  useEffect(() => {
    if (user) {
      Promise.all([
        fetch(`${DATABASE_URL}/ecoEvents.json`).then((r) => r.json()),
        fetch(`${DATABASE_URL}/subscribeEvents/${user.uid}.json`).then((r) =>
          r.json()
        ),
      ]).then(([data, favouriteIds]) => {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        const filteredEvents = formattedData.filter((ecoEvent) =>
          (favouriteIds || []).includes(ecoEvent.id)
        );
        setSubscribeEvents(filteredEvents);
      });
    }
  }, [user]);
  return (
    <>
      {!!user ? (
        <div>
          <div style={{ display: "flex" }}>
            <ActivityChart />
            <ScoreTable />
          </div>
          <Box className="green-event-title">
            <Typography className="green-event-title-content">
              Your subscribes
            </Typography>
            {subscribeEvents.length === 0 && (
              <Typography variant="body" className="green-event-title-content">
                You haven't subscribes events
              </Typography>
            )}
          </Box>
          <Box className="green-event-container">
            <Grid className="grid-event-container">
              {subscribeEvents.map((ecoEvent) => (
                <Grid>
                  <Card className="eventRow-conatiner" key={ecoEvent.id}>
                    <CardMedia
                      className="eventRow-image"
                      component="img"
                      // height="160"
                      alt="Event image"
                      src={ecoEvent.url || logo5}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        className="eventRow-title"
                      >
                        {ecoEvent.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="eventRow-description"
                      >
                        {ecoEvent.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color={"success"}
                        className="eventRow-button"
                        onClick={() => handleDelete(ecoEvent.id)}
                      >
                        Unsubscribes
                      </Button>

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
