import { MBCUstomListItem } from '../../components/MBListItem';

export const MBCustomDropdown = ({ data }) => {
  return (
    <div
      className={`absolute left-10 top-[10vh]  w-2/5 bg-slate-500 flex-grow`}
    >
      <div className="bg-slate-500 h-full w-full text-white">
        {data
          .filter((_movie, index: number) => index < 6)
          .map(movie => (
            <MBCUstomListItem key="1" itemData={movie} />
          ))}
      </div>
    </div>
  );
};
