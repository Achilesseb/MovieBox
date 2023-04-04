// import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from 'react-query';
import './header.styles.scss';
import { ReactElement } from 'react';
// import { getMovieByName } from '../../utils/fetchData';
// import { CUSTOM_DEBOUNCE_TIMEOUT } from '../../constants/customVariables';
// import { MBCUstomListItem } from '../MBListItem';
// import { MBCustomDropdown } from '../MBDropdrown';

export const MBHeader = () => {
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
  const appLabelWidth = 380;
  const divider = appLabelWidth / 12;

  const elements: Array<ReactElement> = [];
  for (let i = 0; i <= divider; i++) {
    elements.push(
      <i className="courtain-element" style={{ right: `${i * 12}px` }}></i>,
    );
  }
  return (
    <>
      <div className="bg-[#1b1b1b w-full h-[6rem] bg-[#1b1b1bef]">
        <div className="relative w-[380px] h-full">
          <Link
            to="/homepage"
            className="w-full h-full flex justify-center items-center text-5xl text-blue-500 tracking-wide leading-6 font-semibold relative before:opacity-0 after:opacity-90"
          >
            <span className="text-white">Movie</span>
            <span>Box</span>
          </Link>
          <div className="courtain">
            <div className="courtain-left">
              {elements
                .filter((_element, index) => index < 10)
                .map(element => element)}
            </div>
            <div className="courtain-right">
              {elements
                .filter((_element, index) => index < 10)
                .map(element => element)}
            </div>
          </div>
        </div>

        {/* <form className="relative order-[-1] w-1/3">
          <input
            autoFocus
            onChange={e => setDebouncedSearchField(e.target.value)}
            className="input"
            type="text"
            placeholder="Search your movie here!"
          />
        </form> */}
        <div className="searchBar-user">
          <div className="homepage-link" />
        </div>
        {/* {data?.results.length !== 0 &&
          (status === 'loading' ? (
            'Loading...'
          ) : (
            <MBCustomDropdown data={data.results} />
          ))} */}
      </div>
    </>
  );
};
