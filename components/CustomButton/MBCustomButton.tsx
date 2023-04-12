type MBCustomButtonPropTypes = {
  children: string;
  type: 'primary' | 'secondary' | 'pagination' | 'default' | 'toggle';
  modifiers?: string;
  hoverEffect?: boolean;
  backgroundEffect?: boolean;
  callback?: React.MouseEventHandler<HTMLButtonElement>;
  selectedIndex?: number;
};

export const MBCustomButton = ({
  children,
  type = 'primary',
  modifiers,
  hoverEffect = false,
  backgroundEffect = false,
  callback,
  selectedIndex,
}: MBCustomButtonPropTypes) => {
  const styles = {
    primary: `${
      backgroundEffect ? 'button' : ' '
    } ml-4 relative text-white text-xl font-semibold w-40 flex justify-center items-center h-[70%] self-center tracking-widest rounded-md  `,
    pagination: `${
      backgroundEffect ? 'button' : ' '
    } relative  text-md font-semibold w-10 flex justify-center items-center h-[70%] self-center tracking-widest rounded-md border border-MBheader border-opacity-50 border-solid `,
    toggle: `${
      backgroundEffect ? 'button' : ' '
    } relative text-md font-semibold w-[10rem] flex justify-center items-center  h-full self-end tracking-widest rounded-md  `,
  };

  return (
    <>
      <button className={`${styles[type]} ${modifiers}`} onClick={callback}>
        {children}
        {hoverEffect ? (
          <>
            <span className="border-top"></span>
            <span className="border-bottom"></span>
            <span className="border-left"></span>
            <span className="border-right"></span>
          </>
        ) : null}
      </button>
    </>
  );
};
