import { SetStateAction, useState } from 'react';
import { MBCustomButton } from './CustomButton/MBCustomButton';

export const MBCustomPaginationBar = ({ children, label, pageHandler }) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    pageHandler(page as SetStateAction<number>);
    setSelectedPage(page);
  };
  return (
    <>
      <ul className="w-full  h-[10%] flex items-center justify-center gap-2 ">
        {children?.map((page: number) => (
          <li key={`${label}.pageItem${page}`}>
            <MBCustomButton
              type="pagination"
              callback={() => handlePageChange(page)}
              modifiers={`${
                selectedPage === page
                  ? 'bg-MBblue text-white'
                  : 'text-slate-500 '
              }`}
            >
              {page.toString() as string}
            </MBCustomButton>
          </li>
        ))}
      </ul>
    </>
  );
};
