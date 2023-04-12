import MBCard from '../Card/Card';
import './Album.module.scss';
import { useQuery } from 'react-query';
import { fetchDataForAlbum } from '../../src/utils';
import { MBCustomAppBar } from '../AppBar/MBAppBar';
import { useState } from 'react';
import { MBCustomButton } from '../CustomButton/MBCustomButton';

type AlbumPropTypes = {
  URL: string;
  label: string;
};

const usePagination = (state, page, resultsPerPage) => {
  if (!state) return { pageResults: undefined };
  console.log(state);

  const pageResults = state.results.filter(
    (_result, index) =>
      index < page * resultsPerPage && index >= (page - 1) * resultsPerPage,
  );
  const totalPages = Math.ceil(state.results.length / resultsPerPage);
  const pages: number[] = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }
  return { pageResults, pages };
};

const Album = ({ URL, label }: AlbumPropTypes) => {
  const { data, status, error, refetch } = useQuery(
    label,
    () => fetchDataForAlbum(URL, page),
    {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  );
  const [pageWidth, setPageWidth] = useState<number | undefined>();
  const [page, setPage] = useState<number>(1);
  // if (typeof window !== 'undefined') {
  //   // detect window screen width function
  //   setPageWidth(window.screen.width);
  // }
  const { pageResults, pages } = usePagination(data, page, 6);

  console.log(data);
  return (
    <>
      <MBCustomAppBar type="primary">{label}</MBCustomAppBar>
      <main className="h-[30rem] w-full flex justify-center">
        <div className="w-[80%] h-full flex-col">
          <div className="w-full h-[80%] flex my-6 justify-between">
            {!data || (status === 'loading' && <span>Loading...</span>)}
            {pageResults &&
              pageResults.map(result => (
                <MBCard data={result} key={result.id} />
              ))}
          </div>
          <div>
            <ul className="w-full flex">
              {pages?.map(page => (
                <li key={`${label}.pageItem${page}`}>
                  <MBCustomButton type="pagination">
                    {page.toString() as string}
                  </MBCustomButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Album;
