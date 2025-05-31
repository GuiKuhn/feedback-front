import React from 'react';
import styles from './styles.module.css';

type ConfirmButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick, children = 'Confirmar' }) => {
  return (
    <button className={styles.confirmButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default ConfirmButton;
