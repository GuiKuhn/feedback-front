import React from "react";
import styles from "./styles.module.css";

const FeedbackSelection: React.FC = () => {
  const options = Array(12).fill("Opção 2").map((label, i) => (i < 2 ? "Opção 1" : label));

  // Dividindo as opções em 2 colunas
  const middle = Math.ceil(options.length / 2);
  const leftColumn = options.slice(0, middle);
  const rightColumn = options.slice(middle);

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <p className={styles.step}>Etapa - 2</p>
        <h1 className={styles.title}>Seleção do Feedback</h1>
      </div>

      {/* Duas colunas com flexbox */}
      <div className={styles.grid}>
        <div className={styles.column}>
          {leftColumn.map((option, index) => (
            <button key={index} className={styles.option}>
              <span className={styles.icon}>👤</span>
              {option}
            </button>
          ))}
        </div>
        <div className={styles.column}>
          {rightColumn.map((option, index) => (
            <button key={index + middle} className={styles.option}>
              <span className={styles.icon}>👤</span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <div className={styles.footer}>
        <button className={styles.backButton}>Voltar</button>
        <button className={styles.confirmButton}>Confirmar</button>
      </div>
    </div>
  );
};

export default FeedbackSelection;
