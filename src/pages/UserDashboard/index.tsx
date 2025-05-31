import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import NewFeedbackButton from '@/components/NewFeedbackButton';

type FeedbackItem = {
  id: number;
  type: 'positive' | 'improvement';
  content: string;
  category: string;
  date: string;
  anonymous: boolean;
  senderName?: string;
};

const Dashboard: React.FC = () => {
  const [feedbacks] = useState<FeedbackItem[]>([
    {
      id: 1,
      type: 'positive',
      content: 'Excelente trabalho coordenando o projeto da última sprint. Sua comunicação clara e liderança ajudaram muito o time.',
      category: '🗣️ Se comunicou bem com a equipe',
      date: '30 Mai, 2025',
      anonymous: false,
      senderName: 'Samuel Ribeiro'
    },
    {
      id: 2,
      type: 'positive',
      content: 'Suas contribuições durante a reunião de planejamento foram muito valiosas e ajudaram a definir melhor o escopo.',
      category: '💡 Contribuiu com boas ideias',
      date: '28 Mai, 2025',
      anonymous: true
    },
    {
      id: 3,
      type: 'improvement',
      content: 'Gostaria de sugerir mais atualizações sobre o progresso das suas tarefas durante a semana.',
      category: '🤐 Comunicação falhou ou foi limitada',
      date: '25 Mai, 2025',
      anonymous: true
    },
    {
      id: 4,
      type: 'positive',
      content: 'Agradeço sua ajuda com a implementação do novo feature. Seu suporte foi fundamental.',
      category: '🤝 Ajudou colegas quando necessário',
      date: '22 Mai, 2025',
      anonymous: false,
      senderName: 'Leonardo Wingert'
    }
  ]);

  const [activeTab, setActiveTab] = useState<'all' | 'positive' | 'improvement'>('all');

  const filteredFeedbacks = activeTab === 'all' 
    ? feedbacks 
    : feedbacks.filter(feedback => feedback.type === activeTab);

  const positiveCount = feedbacks.filter(f => f.type === 'positive').length;
  const improvementCount = feedbacks.filter(f => f.type === 'improvement').length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Meu Dashboard</h1>
          <p className={styles.subtitle}>Bem-vindo(a), Bernardo Paiva</p>
        </div>
        <div>
          <Link to="/feedback-member">
            <NewFeedbackButton />
          </Link>
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📊</div>
          <div>
            <p className={styles.statValue}>{feedbacks.length}</p>
            <p className={styles.statLabel}>Feedbacks recebidos</p>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🚀</div>
          <div>
            <p className={styles.statValue}>{positiveCount}</p>
            <p className={styles.statLabel}>Pontos fortes</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>💡</div>
          <div>
            <p className={styles.statValue}>{improvementCount}</p>
            <p className={styles.statLabel}>Pontos a melhorar</p>
          </div>
        </div>
      </div>

      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Todos
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'positive' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('positive')}
        >
          Pontos Fortes
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'improvement' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('improvement')}
        >
          Pontos a Melhorar
        </button>
      </div>

      <div className={styles.feedbackList}>
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map(feedback => (
            <div 
              key={feedback.id} 
              className={`${styles.feedbackCard} ${feedback.type === 'positive' ? styles.positiveCard : styles.improvementCard}`}
            >
              <div className={styles.feedbackHeader}>
                <div className={styles.categoryTag}>{feedback.category}</div>
                <div className={styles.feedbackDate}>{feedback.date}</div>
              </div>
              
              <div className={styles.feedbackContent}>
                {feedback.content}
              </div>
              
              <div className={styles.feedbackFooter}>
                {feedback.anonymous ? (
                  <span className={styles.anonymousBadge}>Feedback anônimo</span>
                ) : (
                  <span className={styles.senderName}>De: {feedback.senderName}</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>Nenhum feedback encontrado para esta categoria.</p>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <Link to="/" className={styles.secondaryButton}>
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;