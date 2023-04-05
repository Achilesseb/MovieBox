import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactElement } from 'react';
import { customHeadersOptions } from '../../constants/customVariables';
import { MBCustomHeaderTab } from '../MBHeaderTab';

// };

export const MBHeader = () => {
  const appLabelWidth = 380;
  const divider = appLabelWidth / 12;

  const elements: Array<ReactElement> = [];
  for (let i = 0; i <= divider; i++) {
    elements.push(
      <i
        key={`courtain-element${i}`}
        className="courtain-element"
        style={{ right: `${i * 12}px` }}
      ></i>,
    );
  }
  return (
    <>
      <div className=" flex h-[6rem] w-full justify-start bg-[#1b1b1bef]">
        <div className="relative h-full w-[380px]">
          <div className="courtain">
            <div className="courtain-left">
              {elements
                .filter((_element, index) => index < 6)
                .map(element => element)}
            </div>
            <div className="courtain-right">
              {elements
                .filter((_element, index) => index < 6)
                .map(element => element)}
            </div>
          </div>
          <Link
            to="/homepage"
            className="relative flex h-full w-full items-center justify-center text-5xl font-semibold leading-6 tracking-wide text-blue-500 before:opacity-0 after:opacity-90 hover:opacity-100"
          >
            <span className="text-white">Movie</span>
            <span>Box</span>
          </Link>
        </div>
        {customHeadersOptions.map(option => (
          <MBCustomHeaderTab
            key={option.key}
            children={option.label}
            type="primary"
            redirect={option.redirect}
          />
        ))}
      </div>
    </>
  );
};
