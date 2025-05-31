import React from 'react';
import styles from './styles.module.css';

type ConfirmButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean
};

const ConfirmButton: React.FC<ConfirmButtonProps> = ({disabled, onClick, children = 'Confirmar' }) => {
  return (
    <button disabled={disabled} className={styles.confirmButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default ConfirmButton;
