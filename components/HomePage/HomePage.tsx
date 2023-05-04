import './HomePage.module.scss';
import Album from '../Album/Album';

import { MBToggleBar } from '../ToggleBar';
import { useEffect, useState } from 'react';
import { TRENDING_MEDIA } from '../../constants/apiURLS';

const toggleOptions = {
  movie: 'Movies',
  tv: 'TV Series',
};
export const HomePage = () => {
  const [selectedToggleOptions, setSelectedToggleOption] =
    useState<string>('movie');

  const [dataURL, setDataURL] = useState<string>(
    TRENDING_MEDIA.toString().replace('<MEDIA_TYPE>', selectedToggleOptions),
  );

  useEffect(() => {
    setDataURL(
      TRENDING_MEDIA.replace('<MEDIA_TYPE>', selectedToggleOptions).toString(),
    );
  }, [selectedToggleOptions]);

  return (
    <div className="flex flex-col gap-6">
      <MBToggleBar options={toggleOptions} callback={setSelectedToggleOption} />
      <Album
        label={`Trending ${toggleOptions[selectedToggleOptions]}`}
        dataURL={dataURL}
      />
    </div>
  );
};
