import { Link } from 'react-router-dom';

export const MBCustomHeaderTab = ({
  children,
  type = 'primary',
  modifiers,
  redirect,
}: {
  children: string;
  type?: string;
  modifiers?: string;
  redirect: string;
}) => {
  const styleOptions = {
    primary:
      'button text-white text-xl antialiased font-medium tracking-wider h-[70%] self-center w-[10rem] mx-2 ',
    secondary: '',
    default: '',
  };
  return (
    <>
      <Link className={`${styleOptions[type]} ${modifiers}`} to={redirect}>
        {children}
        <span className="top border "></span>
        <span className="bottom border"></span>
        <span className="left border"></span>
        <span className="right border"></span>
      </Link>
    </>
  );
};
