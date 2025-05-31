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
      // Configuração do axios para usar a API
      const response = await axios.get("http://localhost:8080/feedback/");
      console.log("Dados recebidos da API:", response.data);
      
      // Transformar os dados para o formato esperado pelo componente
      if (Array.isArray(response.data)) {
        // Defina um tipo para os itens retornados pela API
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
                  // Log para debug
                  console.log('Processando item:', item);
                  
                  // Construir o objeto fromMember
                  const fromMember: Member = {
                    id: item.fromMember?.id ?? null,
                    name: item.fromMember?.nome ?? "Usuário desconhecido",
                    photoUrl: item.fromMember?.fotourl ?? "https://i.imgur.com/KIX6nja.jpeg"
                  };
                  
                  // Construir o objeto toMember
                  const toMember: Member = {
                    id: item.toMember?.id ?? null,
                    name: item.toMember?.nome ?? "Usuário desconhecido",
                    photoUrl: item.toMember?.fotourl ?? "https://i.imgur.com/KIX6nja.jpeg"
                  };
                  
                  // Verificar se topics existe e é um array
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
        setFeedbacks(generateMockFeedbacks());
      }
    } catch (err) {
      console.error("Erro ao buscar feedbacks:", err);
      setError("Não foi possível carregar os feedbacks. Exibindo dados locais.");
      // Fallback para dados mockados
      setFeedbacks(generateMockFeedbacks());
    }
    setLoading(false);
  };

  fetchFeedbacks();
}, []);

  // Números básicos para estatísticas
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

        {/* Estatísticas básicas */}
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

        {/* Lista de feedbacks */}
        {loading ? (
          <div className={styles.loadingState}>Carregando feedbacks...</div>
        ) : (
          <div className={styles.feedbackList}>
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => {
                // Classificar feedback como positivo ou melhoria
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

// Função para gerar dados mockados como fallback
const generateMockFeedbacks = (): Feedback[] => {
  return [
    {
      id: 1,
      fromMember: { id: 1, name: "Samuel Ribeiro", photoUrl: "https://i.imgur.com/7zzeEb8.jpeg" },
      toMember: { id: 2, name: "Bernardo Paiva", photoUrl: "https://i.imgur.com/aMXs8Ui.jpeg" },
      topics: [1, 3, 6],
      message: "Excelente trabalho na última sprint, especialmente na sua liderança do projeto de frontend.",
      createdAt: "2025-05-25T10:30:00",
      anonymous: false
    },
    {
      id: 2,
      fromMember: { id: 3, name: "Leonardo Wingert", photoUrl: "https://i.imgur.com/6x6nb73.jpeg" },
      toMember: { id: 4, name: "Guilherme Kuhn", photoUrl: "https://i.imgur.com/KIX6nja.jpeg" },
      topics: [2, 4],
      message: "Gostei muito da sua disposição em ajudar a equipe quando tivemos problemas com o deploy.",
      createdAt: "2025-05-24T14:15:00",
      anonymous: true
    },
    {
      id: 3,
      fromMember: { id: 5, name: "João Demari", photoUrl: "https://i.imgur.com/VlUqd9Q.jpeg" },
      toMember: { id: 1, name: "Samuel Ribeiro", photoUrl: "https://i.imgur.com/7zzeEb8.jpeg" },
      topics: [7, 8, 10],
      message: "Senti falta de mais comunicação durante o desenvolvimento da API. Isso causou alguns atrasos no time.",
      createdAt: "2025-05-23T09:45:00",
      anonymous: false
    },
    {
      id: 4,
      fromMember: { id: 2, name: "Bernardo Paiva", photoUrl: "https://i.imgur.com/aMXs8Ui.jpeg" },
      toMember: { id: 3, name: "Leonardo Wingert", photoUrl: "https://i.imgur.com/6x6nb73.jpeg" },
      topics: [1, 2, 5],
      message: "Seu comprometimento com os prazos é exemplar, sempre entregando conforme planejado.",
      createdAt: "2025-05-22T16:20:00",
      anonymous: false
    },
    {
      id: 5,
      fromMember: { id: 4, name: "Guilherme Kuhn", photoUrl: "https://i.imgur.com/KIX6nja.jpeg" },
      toMember: { id: 6, name: "Julio Filho", photoUrl: "https://i.imgur.com/Qx4BXu6.jpeg" },
      topics: [9, 10],
      message: "Tivemos alguns problemas com atrasos nas entregas que impactaram o cronograma do projeto.",
      createdAt: "2025-05-21T11:10:00",
      anonymous: true
    }
  ];
};

export default ManagerDashboard;