import "./movieSpecificCast.styles.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { fetchCastSucces } from "../../../../redux/actions";
import { fetchActors } from "../../../../utils";
import { useSelector } from "react-redux";

const MovieSpecificCast = (data) => {
  const id = Number(data.props);
  const creditsData = useSelector((data) => data.actors);
  const dispatch = useDispatch();
  useEffect(() => {
    if (creditsData.length === 0) {
      const actorsData = fetchActors(id);
      return actorsData
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          return dispatch(fetchCastSucces(res));
        });
    }
  }, []);
  const theme = createTheme();

  const ActorCard = () =>
    creditsData[0].cast
      .filter((cast, index) => index < 11)
      .map((cast, index) => (
        <Grid item key={index} xs={6} sm={4} md={2}>
          <Card
            className="actor-card"
            sx={{
              height: "100%",
              backgroundColor: "rgb(0, 30, 60)",
              color: "white",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {cast.character.replace("/", "")}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: "10.25%",
              }}
              image={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>{cast.original_name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ));
  if (creditsData.length === 0) return <div>Loading</div>;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Cast
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
          }}
          maxWidth="100%"
        >
          <Grid container spacing={2}>
            <ActorCard />
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default MovieSpecificCast;
