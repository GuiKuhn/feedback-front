import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import BackButton from "@/components/BackButton";
import ConfirmButton from "@/components/ConfirmButton";
import { useNavigate } from "react-router-dom";

export const FeedbackDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 style={{ fontSize: "2.5vw", marginBottom: "2vh" }}>
        Deseja detalhar?
      </h1>
      <Textarea
        placeholder="Descreva aqui o que você gostaria de detalhar..."
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
        <Switch id="anon-mode" />
        <label htmlFor="anon-mode">Enviar em modo anônimo</label>
      </div>
      <div
        className="flex justify-between items-center mt-8"
        style={{ width: "35vw" }}
      >
        <BackButton
          onClick={() => {
            navigate("/feedback-topics");
          }}
        />
        <ConfirmButton
          onClick={() => {
            navigate("");
          }}
        ></ConfirmButton>
      </div>
    </div>
  );
};

export default FeedbackDetails;