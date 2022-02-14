import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { width } from "@mui/system";
import { ConstructionOutlined } from "@mui/icons-material";
const theme = createTheme();

export default function Album() {
  const popularMovieData = useSelector((data) => data.popularMovies);
  const [page, setPage] = useState(0);
  const [pageMovies, setPageMovies] = useState((pageNumber = 0) =>
    popularMovieData[0].results.slice(pageNumber * 6, (pageNumber + 1) * 6)
  );

  const handleClickEvent = (e) => {
    e.preventDefault();
    const pageNumber = Number(e.target.textContent) - 1;
    setPageMovies(
      popularMovieData[0].results.slice(pageNumber * 6, (pageNumber + 1) * 6)
    );
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
            Popular right now
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 2 }} maxWidth="100%">
          <Grid
            className="popularMovie-wrap"
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "noWrap",
              overflow: "hidden",
            }}
          >
            {pageMovies.map((movie, index) => (
              <Grid item key={index} xs={10} sm={6} md={2}>
                <Link to={`${movie.id}`} className="popularMovie-card" sx={{}}>
                  <CardMedia
                    component="img"
                    sx={{}}
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      className="popularMovie-title"
                    >
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Pagination
            sx={{ fontSize: "5vh" }}
            hidePrevButton
            hideNextButton
            className="popularMovies-pagination"
            count={Math.ceil(popularMovieData[0].results.length / 6)}
            onClick={handleClickEvent}
          />
        </Container>
      </main>
    </ThemeProvider>
  );
}
