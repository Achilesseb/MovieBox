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
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { fetchCastSucces } from "../../../../redux/actions";
import { fetchActors } from "../../../../utils";

const MovieSpecificCast = (data) => {
  const id = data;
  const [movieCast, setCast] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const actorsData = fetchActors(id);
    return actorsData
      .then((response) => response.json())
      .then((res) => dispatch(fetchCastSucces(res)));
  }, []);
  const theme = createTheme();
  console.log(movieCast);
  const ActorCard = () =>
    movieCast
      .filter((cast, index) => index < 11)
      .map((cast, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
      ));

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
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {/* <ActorCard /> */}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default MovieSpecificCast;
