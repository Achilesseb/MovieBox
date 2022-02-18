import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useState } from "react";

const theme = createTheme();

export default function Album(props) {
  const data = props.props[0];

  const [pageMovies, setPageMovies] = useState((pageNumber = 0) =>
    data[0].results.slice(pageNumber * 6, (pageNumber + 1) * 6)
  );
  const handleClickEvent = (event, newPage) => {
    const pageNumber = newPage - 1;
    setPageMovies(data[0].results.slice(pageNumber * 6, (pageNumber + 1) * 6));
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{ width: "inherit", backgroundColor: "inherit" }}
      >
        <Toolbar className="intro-tabs">
          <MovieFilterIcon sx={{ mr: 2 }} />
          <Typography variant="h5" color="inherit" noWrap>
            {props.props[1]}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container
          sx={{
            py: 2,
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            justifyContent: "center",
          }}
          maxWidth="100%"
        >
          <Grid
            className="popularMovie-wrap"
            container
            spacing={1}
            sx={{
              overflow: "hidden",
            }}
          >
            {pageMovies.map((movie) => (
              <Movie movie={movie} />
            ))}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            className="popularMovies-pagination"
            count={Math.ceil(data[0].results.length / 6)}
            onChange={handleClickEvent}
          />
        </Container>
      </main>
    </ThemeProvider>
  );
}

const Movie = ({ movie }) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <Grid
      item
      key={movie.id}
      xs={0}
      sm={2}
      md={0}
      sx={{
        display: "flex",
      }}
    >
      <Link to={`${movie.id}`} className="popularMovie-card">
        {loading && <h1>Loading</h1>}
        <CardMedia
          component="img"
          sx={{
            display: loading ? "none" : "unset",
          }}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="random"
          onLoad={onLoad}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" className="popularMovie-title">
            {movie.title}
          </Typography>
        </CardContent>
      </Link>
    </Grid>
  );
};
