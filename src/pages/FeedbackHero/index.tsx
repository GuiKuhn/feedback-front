import React from 'react';
import styles from './styles.module.css';
import { FaUserCircle, FaThumbsUp } from 'react-icons/fa';
import Confetti from 'react-confetti';

const FeedbackHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      <div className={styles.card}>
        <FaUserCircle className={styles.avatar} />

        <div className={styles.text}>
          <h2>Julio Filho</h2>
          <div className={styles.subInfo}>
            <span>1º lugar</span>
            <span  className={styles.likes}>
              3 <FaThumbsUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHero;
