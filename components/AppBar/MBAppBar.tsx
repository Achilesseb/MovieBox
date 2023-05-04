type AppBarPropTypes = {
  children: string;
  type: 'primary' | 'secondary' | 'default';
  modifiers?: string;
};

export const MBCustomAppBar = ({
  children,
  type = 'primary',
  modifiers,
}: AppBarPropTypes) => {
  const styles = {
    primary:
      'w-full text-2xl tracking-wide text-white ml-6 font-heading self-center',
  };

  return (
    <div className="h-14 w-full flex justify-center">
      <div className="bg-MBheader w-[80%] h-full rounded-xl flex shadow-md shadow-slate-500">
        <h4 className={`${styles[type]} ${modifiers}`}>{children}</h4>
      </div>
    </div>
  );
};
