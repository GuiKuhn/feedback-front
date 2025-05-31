import React from "react";
import styles from "./styles.module.css";
import { FaThumbsUp } from "react-icons/fa6";

export type Member = {
  id: number;
  name: string;
  photoUrl: string;
};

type Props = {
  member: Member;
  totalLikes: number;
};

const FeedbackHeroCard: React.FC<Props> = ({ member, totalLikes }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={member.photoUrl}
          alt={`Foto de ${member.name}`}
          className={styles.image}
        />
      </div>
      <h3 className="text-2xl font-bold">{member.name}</h3>
      <div className="text-center flex flex-col items-center">
        <span className="text-xl">Feedback Hero</span>
        <div className="flex items-center gap-2">
          <span className={`text-xl ` + styles.likes}>{totalLikes}</span>
          <FaThumbsUp />
        </div>
      </div>
    </div>
  );
};

export default FeedbackHeroCard;
