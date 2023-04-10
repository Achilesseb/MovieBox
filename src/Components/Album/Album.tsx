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
import './Album.module.scss';

type AlbumPropTypes = {
  data: [];
  label: string;
};
const theme = createTheme();

const Album = ({ data, label }) => {
  console.log(data);
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
            {label}
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
            {data.map(movie => (
              <MBCard movie={movie} key={movie.id} />
            ))}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            className="album-pagination"
            count={Math.ceil(data.length / 6)}
            // onChange={handleClickEvent}
          />
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Album;
