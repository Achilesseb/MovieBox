import { SetStateAction, useState } from 'react';
import { MBCustomButton } from './CustomButton/MBCustomButton';
import styles from '../styles/Pagination.module.scss';

export const MBCustomPaginationBar = ({ children, label, pageHandler }) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    pageHandler(page as SetStateAction<number>);
    setSelectedPage(page);
  };
  return (
    <>
      <ul className="w-full  h-[50%] flex items-center justify-center">
        {children?.map((page: number) => (
          <li key={`${label}.pageItem${page}`}>
            {/* <MBCustomButton
              type="pagination"
              callback={() => handlePageChange(page)}
              modifiers={`${
                selectedPage === page
                  ? 'bg-MBblue text-white'
                  : 'text-slate-500 '
              } p-4 m-4 `}
            >
              {page.toString() as string}
            </MBCustomButton> */}
            <div className={styles['paginationButton']}>{page.toString()}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
