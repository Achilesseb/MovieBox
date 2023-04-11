import { Grid, CardMedia, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

import styles from './Card.module.scss';
import Image from 'next/image';

const MBCard = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`${styles.card} `}>
      {loading && <h1>Loading</h1>}
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_API_URL}${data.poster_path}`}
        width="200"
        className="rounded-xl w-full"
        height="200"
        onLoad={onLoad}
        alt={data.id}
      />
      <span className="h-full flex justify-center font-heading text-center items-center">
        {data.title ?? data.name}
      </span>
    </div>
  );
};

export default MBCard;
