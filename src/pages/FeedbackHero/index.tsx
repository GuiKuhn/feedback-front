import styles from "./styles.module.css";
import Confetti from "react-confetti";
import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import FeedbackHeroCard from "@/components/FeedbackHeroCard";

const FeedbackHero: React.FC = () => {
  interface response {
    name: string;
    photoUrl: string;
    totalLikes: number;
  }

  const [res, setRes] = useState<response | null>(null);

  async function getData() {
    await axios
      .get<response>("http://localhost:8080/members/merit", {
        params: {
          dateStart: "2024-06-04",
          dateEnd: "2024-06-09",
        },
      })
      .then((res) => {
        setRes(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      {res && (
        <FeedbackHeroCard
          member={{
            id: 0,
            name: res?.name,
            photoUrl: res?.photoUrl,
          }}
          totalLikes={res.totalLikes}
        />
      )}
    </div>
  );
};

export default FeedbackHero;
