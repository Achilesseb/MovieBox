import { useEffect } from 'react';
import './HomePage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import {
  fetchPopularSucces,
  fetchTopRatedSucces,
} from '../../../redux/movieSlice/movie-actions';
import { fetchPopular, fetchTopRated } from '../../../utils';
import Album from '../../Album/Album';
import { useQuery } from 'react-query';

export const HomePage = () => {
  const {
    data,
    error,
    status,
    refetch: refetchPopulars,
  } = useQuery('fetchPopular', async () => {
    const response = await fetchPopular;
    const data = await response.json();
    if (data.success === false) {
    }
    console.log(data);
    return data;
  });
  console.log(data, error);
  if (status === 'loading' || !data || error)
    return (
      <div className="App">
        <div className="waiting-content">
          <ClipLoader size={150} />
        </div>
      </div>
    );

  return (
    <div className="MB-landingPage">
      <Album data={data.results} label="Popular right now" />
      {/* <Album props={[topRatedMovies, 'Top RATED Movies']} /> */}
    </div>
  );
};
