import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export type Member = {
  id: number;
  name: string;
  photoUrl: string;
};

type Props = {
  member: Member;
};

const MemberCard: React.FC<Props> = ({ member }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/feedback-topics?memberId=${member.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img
          src={member.photoUrl}
          alt={`Foto de ${member.name}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{member.name}</h3>
    </div>
  );
};

export default MemberCard;