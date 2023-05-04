import styles from './MBCustomButton.module.scss';
type MBCustomButonTypes = {
  children: string;
  type: string;
  modifiers?: string;
  borderEffect?: boolean;
};

const MBCustomButton = ({
  children,
  type = 'primary',
  modifiers,
  borderEffect,
}: MBCustomButonTypes) => {
  const styleOptions = {
    primary:
      'button text-white text-xl antialiased font-medium tracking-wider h-[70%] self-center w-[10rem] mx-2 bg-black',
    secondary: '',
    default: '',
  };
  return (
    <>
      <span className={`${styleOptions[type]}${modifiers}`}>
        {children}
        {borderEffect ? (
          <>
            <span className="border top"></span>
            <span className="border bottom"></span>
            <span className="border left"></span>
            <span className="border right"></span>
          </>
        ) : null}
      </span>
    </>
  );
};

export default MBCustomButton;
