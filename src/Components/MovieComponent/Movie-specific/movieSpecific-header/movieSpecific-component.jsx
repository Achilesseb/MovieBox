import React, { useEffect } from "react";
import "./movieSpecific.styles.scss";
import { useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MovieSpecificCast from "../movieSpecificCast/movieSpecificCast-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecificMovie } from "../../../../redux/actions";

const SpecificMovie = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const id = pathname.slice(pathname.lastIndexOf("/") + 1);
  const data = useSelector((data) => data.specificMovie);
  useEffect(() => {
    window.scrollTo(0, 0);
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4419c2df8d66a246f89be8fd55dd282d`
    )
      .then((response) => response.json())
      .then((res) => dispatch(fetchSpecificMovie(res)));
  }, []);
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "90vh",
          width: "90vw",

          padding: "5vh",
          paddingTop: "1vh",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <Grid
          item
          sm={4}
          md={4}
          xs={true}
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          component={Paper}
          elevation={10}
          square
        >
          <Box
            sx={{
              my: 10,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "60vh",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontSize: "2em",
              }}
            >
              {data.title}
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <VideoLibraryIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontSize: "1.2em",
              }}
            >
              {data.overview}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <MovieSpecificCast props={id} />
    </ThemeProvider>
  );
};

export default SpecificMovie;
