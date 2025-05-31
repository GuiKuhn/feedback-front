import React from 'react';
import styles from './styles.module.css';
import { FaCheck } from "react-icons/fa6"; // troquei aqui
import NewFeedbackButton from '../../components/NewFeedbackButton';
import HomeButton from '@/components/HomeButton';


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
                <NewFeedbackButton />
                <HomeButton />
            </div>
        </div>
    );
};

export default FeedbackConfirmation;
