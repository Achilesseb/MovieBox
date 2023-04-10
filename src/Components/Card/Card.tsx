import { Grid, CardMedia, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

import './Card.module.scss';

const MBCard = ({ movie }) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };
  console.log(process.env);
  return (
    <Grid
      item
      xs={0}
      sm={2}
      md={0}
      sx={{
        display: 'flex',
      }}
    >
      <div className="card">
        {loading && <h1>Loading</h1>}
        <CardMedia
          component="img"
          sx={{
            display: loading ? 'none' : 'unset',
          }}
          image={`${process.env.NEXT_PUBLIC_IMAGE_API_URL}${movie.poster_path}`}
          alt="random"
          onLoad={onLoad}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" className="card-title">
            {movie.title}
          </Typography>
        </CardContent>
      </div>
    </Grid>
  );
};

export default MBCard;
