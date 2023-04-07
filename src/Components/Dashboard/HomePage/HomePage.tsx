import { useEffect } from 'react';
import './HomePage.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import {
  fetchPopularSucces,
  fetchTopRatedSucces,
} from '../../../redux/movieSlice/movie-actions';
import { fetchPopular, fetchTopRated } from '../../../utils';
import Album from '../../Album/Album';

export const HomePage = () => {
  // const [searchField, setSearchField] = useState('');

  // const debounce = (func: Function, delay: number) => {
  //   let timerId;
  //   return args => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => func(args), delay);
  //   };
  // };

  // const setDebouncedSearchField = useCallback(
  //   debounce(setSearchField, CUSTOM_DEBOUNCE_TIMEOUT),
  //   [setSearchField],
  // );

  // const { data, status, refetch } = useQuery(
  //   'searchMovie',
  //   async () => await getMovieByName(searchField),
  // );

  // useEffect(() => {
  //   refetch();
  // }, [searchField, refetch]);
  const checkData = useSelector((data: any) => data.movie.popularMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkData.length === 1) return;
    const fetchData = Promise.all([fetchPopular, fetchTopRated]);
    const solvePromises = fetchData.then(response =>
      response.map(response => response.json()),
    );
    solvePromises.then(promise =>
      promise.forEach((result, index) => {
        if (index === 0) result.then(res => dispatch(fetchPopularSucces(res)));
        if (index === 1) result.then(res => dispatch(fetchTopRatedSucces(res)));
      }),
    );
  }, [checkData.length, dispatch]);

  const data = useSelector((data: any) => data?.movie);
  const { popularMovies } = data;
  const { topRatedMovies } = data;
  if (popularMovies.length === 0 || topRatedMovies.length === 0)
    return (
      <div className="App">
        <div className="waiting-content">
          <ClipLoader size={150} />
        </div>
      </div>
    );

  return (
    <div className="MB-landingPage">
      <Album props={[popularMovies, 'POPULAR right now']} />
      <Album props={[topRatedMovies, 'Top RATED Movies']} />
    </div>
  );
};
