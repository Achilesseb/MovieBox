type MBCustomButtonPropTypes = {
  children: string;
  type: 'primary' | 'secondary' | 'pagination' | 'default';
  modifiers?: string;
  hoverEffect?: boolean;
};

export const MBCustomButton = ({
  children,
  type,
  modifiers,
  hoverEffect = false,
}: MBCustomButtonPropTypes) => {
  const styles = {
    primary:
      'button ml-4 relative text-white text-xl font-semibold w-40 flex justify-center items-center h-[70%] self-center tracking-widest rounded-md  ',
    pagination:
      'button ml-4 bg-black relative text-slate-600 text-sm font-semibold w-10 flex justify-center items-center h-[70%] self-center tracking-widest rounded-md ',
  };
  return (
    <>
      <div className={`${styles[type]} ${modifiers}`}>
        {children}
        {hoverEffect ? (
          <>
            <span className={styles['border-top']}></span>
            <span className={styles['border-bottom']}></span>
            <span className={styles['border-left']}></span>
            <span className={styles['border-right']}></span>
          </>
        ) : null}
      </div>
    </>
  );
};
