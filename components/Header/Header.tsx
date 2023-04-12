import styles from './Header.module.scss';
import { ReactElement } from 'react';
import { customHeadersOptions } from '../../constants/customVariables';
import { MBCustomButton } from '../CustomButton/MBCustomButton';

export const MBHeader = () => {
  const appLabelWidth = 380;
  const divider = appLabelWidth / 12;

  const elements: Array<ReactElement> = [];
  for (let i = 0; i <= divider; i++) {
    elements.push(
      <i
        key={`courtain-element${i}`}
        className={styles['courtain-element']}
        style={{ right: `${i * 12}px` }}
      ></i>,
    );
  }
  return (
    <>
      <div className={styles.header}>
        <div className={styles['courtain-container']}>
          <div className={styles.courtain}>
            <div className={styles['courtain-left']}>
              {elements
                .filter((_element, index) => index < 6)
                .map(element => element)}
            </div>
            <div className={styles['courtain-right']}>
              {elements
                .filter((_element, index) => index < 6)
                .map(element => element)}
            </div>
          </div>
          <div className={`${styles['logo']}`}>
            <span className={styles['logo-first']}>Movie</span>
            <span>Box</span>
          </div>
        </div>
        {customHeadersOptions.map(option => (
          <MBCustomButton
            type="primary"
            key={option.key}
            hoverEffect={true}
            backgroundEffect={true}
          >
            {option.label}
          </MBCustomButton>
        ))}
      </div>
    </>
  );
};
