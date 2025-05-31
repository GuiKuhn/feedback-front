import React from 'react';
import styles from './styles.module.css';
import { FaCheck } from "react-icons/fa6"; // troquei aqui


const FeedbackConfirmation: React.FC = () => {
    return (
        <div className={styles.container}>
            <span></span>
            <div className={styles.feedbackBox}>
                <div className={styles.icon}>
                    <FaCheck className={styles.checkIcon} />
                </div>

                <p className={styles.message}>Feedback<br />enviado!</p>
            </div>

            <div className={styles.buttons}>
                <button className={styles.button}>
                    Novo feedback
                </button>
                <button className={styles.button}>
                    Home
                </button>
            </div>
        </div>
    );
};

export default FeedbackConfirmation;
