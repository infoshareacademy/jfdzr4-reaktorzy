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
import { ActivityChart } from "../activityChart";
import { ScoreTable } from "../scoreTable";

export const Profile = () => {
  const { user, subscribeEvents, setSubscribeEvents, handleDelete } =
    useContext(SubscribeEventContex);

  useEffect(() => {
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
  }, []);
  return (
    <div>
      <h3>Profile</h3>
      <ActivityChart />
      <Typography variant="h5">Your subscribes</Typography>
      {subscribeEvents.length === 0 && (
        <Typography variant="body">You haven't subscribes events</Typography>
      )}
      <Box sx={{ flexGrow: 1, maxWidth: "1200px", margin: "auto" }}>
        <Grid container spacing={2}>
          {subscribeEvents.map((ecoEvent) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }} key={ecoEvent.id}>
                <CardMedia
                  component="img"
                  height="160"
                  alt="Event image"
                  src={ecoEvent.url || logo5}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ height: 60 }}
                  >
                    {ecoEvent.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ height: 80, overflow: "hidden" }}
                  >
                    {ecoEvent.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color={"success"}
                    size="small"
                    sx={{ width: "110px" }}
                    onClick={() => handleDelete(ecoEvent.id)}
                  >
                    Unsubscribes
                  </Button>

                  <Button
                    size="small"
                    sx={{ width: "110px", marginLeft: "10px" }}
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
      <ScoreTable />
    </div>
  );
};
