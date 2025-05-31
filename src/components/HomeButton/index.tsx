import React from 'react';
import styles from './styles.module.css';

type HomeButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const HomeButton: React.FC<HomeButtonProps> = ({
  onClick,
  children = 'Home',
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default HomeButton;
