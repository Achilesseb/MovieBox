import './HomePage.module.scss';
import Album from '../Album/Album';
import {
  POPULAR_URL,
  TOPRATED_URL,
  TRENDING_MOVIES_URL,
  TRENDING_TV_URL,
} from '../../constants/apiURLS';

export const HomePage = () => {
  return (
    <div className="MB-landingPage">
      <Album label="Trending Movies" URL={TRENDING_MOVIES_URL} />
      <Album label="Trending TV Series" URL={TRENDING_TV_URL} />
    </div>
  );
};
