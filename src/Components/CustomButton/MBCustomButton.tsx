import styles from './MBCustomButton.module.scss';

export const MBCustomButton = ({ children }: { children: string }) => {
  return (
    <>
      <div className={styles.button}>
        {children}
        <span className={styles['border-top']}></span>
        <span className={styles['border-bottom']}></span>
        <span className={styles['border-left']}></span>
        <span className={styles['border-right']}></span>
      </div>
    </>
  );
};
