import { ReactNode, useState } from 'react';
import { MBCustomButton } from './CustomButton/MBCustomButton';

export const MBToggleBar = ({ options, callback }) => {
  const [selectedMediaCategory, setSelectedMediaCategory] =
    useState<string>('movie');
  const toggleBarOptions: Array<ReactNode[]> = Object.entries(options);
  const handleSelectToggleOption = (option: string) => {
    callback(option);
    setSelectedMediaCategory(option);
  };
  console.log(toggleBarOptions);
  return (
    <div className="w-[80%] self-center">
      <div className="relative h-[3rem] overflow-hidden flex rounded-2xl border border-MBheader border-opacity-90 border-solid border-x-4 border-y-2 w-[18rem]">
        {toggleBarOptions.map((option, index) => (
          <MBCustomButton
            type="toggle"
            key={`toggle.${option[0]}`}
            callback={() => handleSelectToggleOption(option[0] as string)}
            modifiers={`${
              selectedMediaCategory === option[0]
                ? 'toggle-selected  bg-MBheader text-white w-[10rem] shadow-md shadow-MBheader '
                : 'toggle-not-selected text-slate-500 w-[7rem] '
            } ${option[0] === 'movie' ? 'toggle-left' : 'toggle-right'}`}
          >
            {option[1] as string}
          </MBCustomButton>
        ))}
      </div>
    </div>
  );
};
