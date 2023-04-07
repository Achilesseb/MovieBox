import { MBHeader } from '../Header/Header';
import { HomePage } from '../Dashboard/HomePage/HomePage';
import MBFooter from '../Footer/Footer';
import MBMainFrame from '../MainFrame';

const MBLayout = () => {
  return (
    <>
      <MBHeader />
      <MBMainFrame>
        <HomePage />
      </MBMainFrame>
      <MBFooter />
    </>
  );
};

export default MBLayout;
