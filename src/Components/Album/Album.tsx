import { ThemeProvider } from '@emotion/react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Pagination,
  createTheme,
} from '@mui/material';
import { useState } from 'react';
import MBCard from '../Card/Card';
import './Album.styles.scss';

const theme = createTheme();

const Album = props => {
  const data = props.props[0];
  console.log(data);

  const [pageMovies, setPageMovies] = useState((pageNumber = 0) =>
    data[0].results.slice(pageNumber * 6, (pageNumber + 1) * 6),
  );
  const handleClickEvent = (_event, newPage: number) => {
    const pageNumber = newPage - 1;
    setPageMovies(data[0].results.slice(pageNumber * 6, (pageNumber + 1) * 6));
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{ width: 'inherit', backgroundColor: 'inherit' }}
      >
        <Toolbar className="album-tab" sx={{ zIndex: '0' }}>
          {/* <MovieFilterIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h5" color="inherit" noWrap>
            {props.props[1]}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container
          sx={{
            py: 2,
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '100%',
          }}
        >
          <Grid
            className="album"
            container
            spacing={1}
            sx={{
              overflow: 'hidden',
            }}
          >
            {pageMovies.map(movie => (
              <MBCard movie={movie} key={movie.id} />
            ))}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            className="album-pagination"
            count={Math.ceil(data[0].results.length / 6)}
            onChange={handleClickEvent}
          />
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Album;
