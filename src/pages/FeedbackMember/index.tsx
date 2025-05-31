import React from "react";
import MemberCard, { type Member } from "../../components/MemberCard";
import styles from "./styles.module.css";

const members: Member[] = [
  {
    name: "Samuel Ribeiro",
    id: 1,
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mABcIa-JzRlzyG1idAyXkK00R1M6A-5vjA&s",
  },
  {
    name: "Bernardo Paiva",
    id: 2,
    photoUrl:
      "https://veja.abril.com.br/wp-content/uploads/2024/08/neymar-santos.jpg?quality=70&strip=info&w=414&h=280&crop=1",
  },
  {
    id: 3,
    name: "Leonardo Wingert",
    photoUrl:
      "https://a.espncdn.com/photo/2025/0131/r1445897_1296x729_16-9.jpg",
  },
  {
    id: 4,
    name: "Guilherme Kuhn",
    photoUrl:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1668971338-e1694439970587.jpg?w=1200&h=900&crop=1",
  },
  {
    id: 5,
    name: "João Demari",
    photoUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2024/12/Neymar.jpg",
  },
  {
    id: 6,
    name: "Lucas Silva",
    photoUrl:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/03/neymar-santos_2e1987-e1741616548279.jpg?w=1200&h=675&crop=1",
  },
];

const FeedbackMember: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.step}>Etapa - 1</p>
        <h1 className={styles.title}>Select Member </h1>
      </div>

      <div className="grid grid-cols-3 gap-12 p-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackMember;
