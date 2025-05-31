import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>🦸‍♂️ Feedback Hero</h1>
        <p className={styles.subtitle}>
          Uma plataforma simples e eficaz para coletar e compartilhar feedbacks construtivos
          entre membros da equipe, promovendo crescimento profissional e colaboração.
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/feedback-member" className={styles.primaryButton}>
            Iniciar Feedback
          </Link>
          <Link to="/dashboard" className={styles.secondaryButton}>
            Ver meus feedbacks
          </Link>
        </div>
      </div>

      <div className={styles.featureSection}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚀</div>
          <h3 className={styles.featureTitle}>Feedback Simplificado</h3>
          <p className={styles.featureDescription}>
            Processo intuitivo que torna fácil dar feedback construtivo para qualquer membro da equipe.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🔒</div>
          <h3 className={styles.featureTitle}>Modo Anônimo</h3>
          <p className={styles.featureDescription}>
            Opção de enviar feedback de forma anônima para promover comunicação sincera e aberta.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>💡</div>
          <h3 className={styles.featureTitle}>Categorias Relevantes</h3>
          <p className={styles.featureDescription}>
            Modelos predefinidos e opções personalizáveis para atender às necessidades da sua equipe.
          </p>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };