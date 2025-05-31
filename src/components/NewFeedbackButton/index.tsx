import React from 'react';
import styles from './styles.module.css';

type NewFeedbackButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const NewFeedbackButton: React.FC<NewFeedbackButtonProps> = ({
  onClick,
  children = 'Novo feedback',
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default NewFeedbackButton;
