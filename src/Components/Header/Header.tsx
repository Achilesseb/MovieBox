import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import './header.styles.scss';
import { getMovieByName } from '../../utils/fetchData';
import { CUSTOM_DEBOUNCE_TIMEOUT } from '../../constants/customVariables';
import { MBCUstomListItem } from '../MBListItem';

export const MBHeader = () => {
  const [searchField, setSearchField] = useState('');

  const debounce = (func: Function, delay: number) => {
    let timerId;
    return args => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(args), delay);
    };
  };

  const setDebouncedSearchField = useCallback(
    debounce(setSearchField, CUSTOM_DEBOUNCE_TIMEOUT),
    [setSearchField],
  );

  const { data, status, refetch } = useQuery(
    'searchMovie',
    async () => await getMovieByName(searchField),
  );

  useEffect(() => {
    refetch();
  }, [searchField, refetch]);

  return (
    <>
      <div className="search-bar">
        <Link to="/homepage" className="introPage-link">
          MovieBox
        </Link>
        <form className="relative order-[-1] w-1/3">
          <input
            autoFocus
            onChange={e => setDebouncedSearchField(e.target.value)}
            className="input"
            type="text"
            placeholder="Search your movie here!"
            // value={searchField}
          ></input>
        </form>
        <div className="searchBar-user">
          <div className="homepage-link" />
        </div>
        {data?.results.length !== 0 &&
          (status === 'loading' ? (
            'Loading...'
          ) : (
            <div
              className={`absolute left-10 top-[10vh]  w-2/5 bg-slate-500 flex-grow`}
            >
              <div className="bg-slate-500 h-full w-full text-white">
                {data.results
                  .filter((_movie, index: number) => index < 6)
                  .map(movie => (
                    <MBCUstomListItem itemData={movie} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
