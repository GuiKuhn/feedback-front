import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const UserDashboard: React.FC = () => {
  const { memberId } = useParams();
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'positive' | 'improvement'>('all');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`http://localhost:8080/members/${memberId}/feedbacks`);
        const data = await response.json();
  
        // transformar os dados
        const mappedFeedbacks: FeedbackItem[] = data.map((item: any, index: number) => ({
          id: index + 1, // você pode usar item.id se tiver
          type: 'positive', // ou 'improvement', se vier do backend
          content: item.message || 'Sem mensagem',
          category: item.topics?.[0] || 'Sem categoria',
          date: '30 Mai, 2025', // mock por enquanto
          anonymous: item.anonymous,
          senderName: item.anonymous ? undefined : `Membro ${item.idFromMember}`
        }));
  
        setFeedbacks(mappedFeedbacks);
      } catch (error) {
        console.error('Erro ao buscar feedbacks:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchFeedbacks();
  }, [memberId]);
  

  const filteredFeedbacks = activeTab === 'all'
    ? feedbacks
    : feedbacks.filter(feedback => feedback.type === activeTab);

  const positiveCount = feedbacks.filter(f => f.type === 'positive').length;
  const improvementCount = feedbacks.filter(f => f.type === 'improvement').length;

  if (loading) {
    return <div className={styles.loading}>Carregando feedbacks...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Meu Dashboard</h1>
          <p className={styles.subtitle}>Bem-vindo(a), membro {memberId}</p>
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

export default UserDashboard;
