import React from 'react';
import styles from './styles.module.css';

type BackButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick, children = 'Voltar' }) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default BackButton;
