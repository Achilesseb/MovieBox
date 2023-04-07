import { Grid, CardMedia, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.styles.scss';

const MBCard = ({ movie }) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };

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
      <Link to={`${movie.id}`} className="card">
        {loading && <h1>Loading</h1>}
        <CardMedia
          component="img"
          sx={{
            display: loading ? 'none' : 'unset',
          }}
          image={`${process.env.REACT_APP_IMAGE_API_URL}${movie.poster_path}`}
          alt="random"
          onLoad={onLoad}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" className="card-title">
            {movie.title}
          </Typography>
        </CardContent>
      </Link>
    </Grid>
  );
};

export default MBCard;
