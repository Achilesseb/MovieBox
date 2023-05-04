import MBCard from '../Card/Card';
import './Album.module.scss';
import { useQuery } from 'react-query';
import { fetchDataForAlbum } from '../../src/utils';
import { MBCustomAppBar } from '../AppBar/MBAppBar';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MBCustomButton } from '../CustomButton/MBCustomButton';
import { CustomPaginationOptions } from '../../constants/customVariables';
import { MBCustomPaginationBar } from '../MBPagination';

type AlbumPropTypes = {
  dataURL: string;
  label: string;
};

const usePagination = state => {
  const [page, setPage] = useState<number>(1);
  const [resultsPerPage, setResultsPerPage] = useState<number>(
    CustomPaginationOptions.N6,
  );
  if (!state) {
    return {
      pageResults: undefined,
      pages: undefined,
      currentPage: page,
      setPage,
    };
  }
  const pageResults: [] = state.results.filter(
    (_result, index) =>
      index < page * resultsPerPage && index >= (page - 1) * resultsPerPage,
  );
  const totalPages = Math.ceil(state.results.length / resultsPerPage);
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return { pageResults, pages, setPage, resultsPerPage, setResultsPerPage };
};

const Album = ({ dataURL, label }: AlbumPropTypes) => {
  const { data, status, error, refetch } = useQuery(
    [label, dataURL],
    () => {
      console.log(dataURL);
      return fetchDataForAlbum(dataURL, 1);
    },
    {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  );
  const { pageResults, pages, setPage } = usePagination(data);
  const handlePageChange = (page: number) => {
    setPage(page as SetStateAction<number>);
  };

  return (
    <>
      <MBCustomAppBar type="primary">{label}</MBCustomAppBar>
      <main className="h-[30rem] w-full flex justify-center">
        <div className=" w-[80%] h-full flex-col">
          <div
            className={` album w-full h-[80%] flex my-6  gap-6 ${
              pageResults?.length === 6 ? 'justify-evenly' : 'justify-start'
            }`}
          >
            {(!pageResults || status === 'loading') && <span>Loading...</span>}
            {pageResults &&
              pageResults.map(result => (
                <MBCard data={result} key={result.id} />
              ))}
          </div>
          <MBCustomPaginationBar label={label} pageHandler={setPage}>
            {pages}
          </MBCustomPaginationBar>
        </div>
      </main>
    </>
  );
};

export default Album;
