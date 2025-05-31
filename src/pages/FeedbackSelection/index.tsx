import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import ConfirmButton from "../../components/ConfirmButton";

type Option = {
  name: string
  id: number
};

const options: Option[] = [
  { id: 1, name: "🚀 Foi proativo e engajado" },
  { id: 2, name: "🗣️ Se comunicou bem com a equipe" },
  { id: 3, name: "💡 Contribuiu com boas ideias" },
  { id: 4, name: "🤝 Ajudou colegas quando necessário" },
  { id: 5, name: "⏱️ Cumpriu prazos e entregas" },
  { id: 6, name: "🧭 Mostrou iniciativa ou liderança" },
  { id: 7, name: "😐 Demonstrou pouco interesse" },
  { id: 8, name: "🤐 Comunicação falhou ou foi limitada" },
  { id: 9, name: "🕰️ Teve atrasos ou faltas injustificadas" },
  { id: 10, name: "🌀 Faltou organização ou foco" },
  { id: 11, name: "🤨 Fez comentários ou piadas inadequadas" },
  { id: 12, name: "✍️ Outro (especificar depois)" },
];
import styles from "./styles.module.css";

const FeedbackSelection: React.FC = () => {
  const param = new URLSearchParams(window.location.search);
  const memberId = param.get("memberId");

  const [selected, setSelected] = useState<number[]>([]);

  const toggleOption = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const middle = Math.ceil(options.length / 2);
  const leftColumn = options.slice(0, middle);
  const rightColumn = options.slice(middle);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.step}>Etapa - 2</p>
        <h1 className={styles.title}>Seleção do Feedback</h1>
      </div>
      <div className={styles.grid}>
        <div className={styles.column}>
          {leftColumn.map((option) => (
            <button
              key={option.id}
              className={`${styles.optionLeft} ${selected.includes(option.id) ? styles.selected : ""}`}
              onClick={() => toggleOption(option.id)}
              type="button"
            >
              <span className={styles.icon}></span>
              {option.name}
            </button>
          ))}
        </div>
        <div className={styles.column}>
          {rightColumn.map((option) => (
            <button
              key={option.id}
              className={`${styles.optionRight} ${selected.includes(option.id) ? styles.selected : ""}`}
              onClick={() => toggleOption(option.id)}
              type="button"
            >
              <span className={styles.icon}></span>
              {option.name}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <BackButton
          onClick={() => {
            navigate("/feedback-member");
          }}
        />
        <ConfirmButton
          onClick={() =>
            navigate(
              "/feedback-details?memberId=" + memberId + "&feedbackId=1,2,3"
            )
          }
        />
      </div>
    </div>
  );
};

export default FeedbackSelection;