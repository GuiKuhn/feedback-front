import React from "react";
import MemberCard, { type Member } from "../../components/MemberCard";
import styles from "./styles.module.css";
import HomeButton from "@/components/HomeButton";

const members: Member[] = [
  {
    name: "Samuel Ribeiro",
    id: 1,
    photoUrl:
      "https://i.imgur.com/7zzeEb8.jpeg",
  },
  {
    name: "Bernardo Paiva",
    id: 2,
    photoUrl:
      "https://i.imgur.com/aMXs8Ui.jpeg",
  },
  {
    id: 3,
    name: "Leonardo Wingert",
    photoUrl:
      "https://i.imgur.com/6x6nb73.jpeg",
  },
  {
    id: 4,
    name: "Guilherme Kuhn",
    photoUrl:
      "https://i.imgur.com/KIX6nja.jpeg",
  },
  {
    id: 5,
    name: "João Demari",
    photoUrl:
      "https://i.imgur.com/VlUqd9Q.jpeg",
  },
  {
    id: 6,
    name: "Julio Filho",
    photoUrl:
      "https://i.imgur.com/Qx4BXu6.jpeg",
  },
];

const FeedbackMember: React.FC = () => {
  return (
    <>
      <div className={styles.homeButtonContainer}>
        <HomeButton onClick={() => (window.location.href = "/")} />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.step}>Etapa - 1</p>
          <h1 className={styles.title}>Escolher membro</h1>
        </div>

        <div className={styles.memberGrid}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedbackMember;