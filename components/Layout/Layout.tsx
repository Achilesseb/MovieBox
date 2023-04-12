import { MBHeader } from '../Header/Header';
import MBFooter from '../Footer/Footer';
import MBMainFrame from '../MainFrame';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const MBLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <MBHeader />
      <MBMainFrame>{children}</MBMainFrame>
      <MBFooter />
    </>
  );
};

export default MBLayout;
