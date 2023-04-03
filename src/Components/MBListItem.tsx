export const MBCUstomListItem = ({ itemData }) => {
  console.log(itemData);
  return (
    <div className="flex w-full h-16 justify-start align-middle gap-16">
      <img
        className="w-1/10 h-16 align-middle justify-center"
        src={`https://image.tmdb.org/t/p/w500${itemData.poster_path}`}
        alt={itemData.title}
      ></img>
      <span className="flex w-9/10 h-16 items-center">{itemData.title}</span>
    </div>
  );
};
