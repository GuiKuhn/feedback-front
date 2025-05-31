import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import HomeButton from "@/components/HomeButton";

const topicMap: Record<number, { text: string; type: "positive" | "improvement" }> = {
  1: { text: "🚀 Foi proativo e engajado", type: "positive" },
  2: { text: "🗣️ Se comunicou bem com a equipe", type: "positive" },
  3: { text: "💡 Contribuiu com boas ideias", type: "positive" },
  4: { text: "🤝 Ajudou colegas quando necessário", type: "positive" },
  5: { text: "⏱️ Cumpriu prazos e entregas", type: "positive" },
  6: { text: "🧭 Mostrou iniciativa ou liderança", type: "positive" },
  7: { text: "😐 Demonstrou pouco interesse", type: "improvement" },
  8: { text: "🤐 Comunicação falhou ou foi limitada", type: "improvement" },
  9: { text: "🕰️ Teve atrasos ou faltas injustificadas", type: "improvement" },
  10: { text: "🌀 Faltou organização ou foco", type: "improvement" },
  11: { text: "🤨 Fez comentários ou piadas inadequadas", type: "improvement" },
  12: { text: "✍️ Outro (especificado na mensagem)", type: "improvement" },
};

type Member = {
  id: number | null | undefined;
  name: string;
  photoUrl: string;
};

type Feedback = {
  id: number | null | undefined;
  fromMember: Member;
  toMember: Member;
  topics: number[];
  message: string;
  createdAt: string;
  anonymous: boolean;
};

const ManagerDashboard: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/feedback/");
      
      if (Array.isArray(response.data)) {
        type ApiMember = {
          id?: number | null;
          nome?: string;
          fotourl?: string;
        };
        
        type ApiFeedback = {
          id?: number | null;
          fromMember?: ApiMember;
          toMember?: ApiMember;
          topics?: number[];
          message?: string;
          createdAt?: string;
          anonymous?: boolean;
        };
        
                const transformedData: Feedback[] = response.data.map((item: ApiFeedback) => {
                  console.log('Processando item:', item);
                  
                  const fromMember: Member = {
                    id: item.fromMember?.id ?? null,
                    name: item.fromMember?.nome ?? "Usuário desconhecido",
                    photoUrl: item.fromMember?.fotourl ?? "https://i.imgur.com/KIX6nja.jpeg"
                  };
                  
                  const toMember: Member = {
                    id: item.toMember?.id ?? null,
                    name: item.toMember?.nome ?? "Usuário desconhecido",
                    photoUrl: item.toMember?.fotourl ?? "https://i.imgur.com/KIX6nja.jpeg"
                  };
                  
                  const topics = Array.isArray(item.topics) ? item.topics : [];
                  
                  return {
                    id: item.id ?? null,
                    fromMember,
                    toMember,
                    topics,
                    message: item.message ?? "",
                    createdAt: item.createdAt ?? new Date().toISOString(),
                    anonymous: !!item.anonymous
                  };
                });
        
        setFeedbacks(transformedData);
      } else {
        console.error("Resposta da API não é um array:", response.data);
        setError("Formato de dados inválido recebido do servidor");
      }
    } catch (err) {
      console.error("Erro ao buscar feedbacks:", err);
      setError("Não foi possível carregar os feedbacks.");
    }
    setLoading(false);
  };

  fetchFeedbacks();
}, []);

  const totalPositive = feedbacks.filter(f => 
    f.topics.filter(t => topicMap[t]?.type === "positive").length > 
    f.topics.filter(t => topicMap[t]?.type === "improvement").length
  ).length;
  
  const totalImprovement = feedbacks.length - totalPositive;

  return (
    <>
      <div className={styles.homeButtonContainer}>
        <HomeButton onClick={() => (window.location.href = "/")} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard de Gestão</h1>
          <p className={styles.subtitle}>
            Visão geral dos feedbacks
            {error && <span className={styles.errorIndicator}> (dados locais)</span>}
          </p>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div>
              <p className={styles.statValue}>{feedbacks.length}</p>
              <p className={styles.statLabel}>Total</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <p className={styles.statValue}>{totalPositive}</p>
              <p className={styles.statLabel}>Positivos</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <p className={styles.statValue}>{totalImprovement}</p>
              <p className={styles.statLabel}>Melhorias</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={styles.loadingState}>Carregando feedbacks...</div>
        ) : (
          <div className={styles.feedbackList}>
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => {
                const positiveTopics = feedback.topics.filter(
                  (t) => topicMap[t]?.type === "positive"
                ).length;
                const improvementTopics = feedback.topics.length - positiveTopics;
                const feedbackType = positiveTopics >= improvementTopics ? "positive" : "improvement";
                
                return (
                  <div
                    key={`feedback-${feedback.id || Math.random()}`}
                    className={`${styles.feedbackCard} ${styles[`${feedbackType}Card`]}`}
                  >
                    <div className={styles.feedbackHeader}>
                      <div className={styles.memberInfo}>
                        <img
                          src={feedback.toMember.photoUrl}
                          alt={`Foto de ${feedback.toMember.name}`}
                          className={styles.memberAvatar}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://i.imgur.com/KIX6nja.jpeg';
                          }}
                        />
                        <div className={styles.memberDetails}>
                          <span className={styles.memberName}>
                            Para: {feedback.toMember.name}
                          </span>
                          <span className={styles.feedbackDate}>
                            {new Date(feedback.createdAt).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                      </div>

                      <div className={styles.feedbackMeta}>
                        {feedback.anonymous ? (
                          <span className={styles.anonymousBadge}>Anônimo</span>
                        ) : (
                          <span>De: {feedback.fromMember.name}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className={styles.messageBox}>
                      <p className={styles.messageContent}>
                        {feedback.message}
                      </p>
                    </div>
                    
                    <div className={styles.topicsList}>
                      {feedback.topics.slice(0, 3).map((topicId, index) => (
                        <span
                          key={`topic-${index}`}
                          className={`${styles.topicBadge} ${
                            topicMap[topicId]?.type === "positive"
                              ? styles.positiveTopic
                              : styles.improvementTopic
                          }`}
                        >
                          {topicMap[topicId]?.text || `Tópico ${topicId}`}
                        </span>
                      ))}
                      {feedback.topics.length > 3 && (
                        <span className={styles.moreBadge}>
                          +{feedback.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className={styles.emptyState}>
                Nenhum feedback encontrado.
              </div>
            )}
          </div>
        )}

        {error && (
          <div className={styles.errorNotice}>
            <p>{error}</p>
            <button 
              className={styles.retryButton}
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ManagerDashboard;