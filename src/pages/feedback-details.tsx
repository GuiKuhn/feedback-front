import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import BackButton from "@/components/BackButton";
import ConfirmButton from "@/components/ConfirmButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const FeedbackDetails = () => {
  const navigate = useNavigate();

  const param = new URLSearchParams(window.location.search);
  const memberId = param.get("memberId");
  const topics = param.get("feedbackId");

  const [isAnonymous, setIsAnonymous] = useState(false);

async function handleSubmit() {
    try {
      await axios.post("http://localhost:8080/feedback/", payload);
      navigate("/confirmation");
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
    }
  };

  const [payload, setPayload] = useState<{
    idFromMember: number,
    idToMember: number,
    topics: number[],
    message: string | null,
    anonymous: boolean,
  }>({
    idFromMember: 0,
    idToMember: 0,
    topics: [],
    anonymous: false,
    message: null
  })

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 style={{ fontSize: "2.5vw", marginBottom: "2vh" }}>
        Deseja detalhar?
      </h1>
      <Textarea
        placeholder="Descreva aqui o que você gostaria de detalhar..."
        onChange={(e) => {
          setPayload(prev => {
            prev.message = e.target.value
            return prev
          })
        }}
        style={{
          padding: "0.75vw",
          fontSize: "1vw",
          width: "35vw",
          height: "40vh",
          backgroundColor: "#EFEFEF",
          resize: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "2vh",
          marginBottom: "2vh",
        }}
      >
        <img src="./src/assets/anon-icon.svg" alt="" />
        <Switch 
          id="anon-mode" 
          checked={isAnonymous}
          onCheckedChange={setIsAnonymous}
        />
        <label htmlFor="anon-mode">Enviar em modo anônimo</label>
      </div>
      <div
        className="flex justify-between items-center mt-8"
        style={{ width: "35vw" }}
      >
        <BackButton
          onClick={() => {
            navigate("/feedback-topics?memberId=" + memberId);
          }}
        />
        <ConfirmButton
          onClick={() => {
            navigate("/confirmation");
            setPayload(prev => {
              if(memberId)
                prev.idToMember = +memberId 

              if(topics)
                prev.topics = topics?.split(",").map(Number);

              prev.anonymous = isAnonymous;
              
              return prev
              })
            console.log(payload)
            handleSubmit()
          }}  
        ></ConfirmButton>
      </div>
    </div>
  );
};

export default FeedbackDetails;