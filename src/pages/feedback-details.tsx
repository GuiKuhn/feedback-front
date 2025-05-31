import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export const FeedbackDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 style={{ fontSize: "2.5vw", marginBottom: "4vh" }}>
        Deseja detalhar?
      </h1>
      <Textarea
        style={{
          width: "35vw",    
          height: "40vh",
          backgroundColor: "#EFEFEF",
          resize: "none",
        }}
      />
      <div className="flex items-center space-x-2 mt-4">
        <img src="./src/assets/anon-icon.svg" alt="" />
        <Switch id="anon-mode" />
        <label htmlFor="anon-mode">Enviar em modo anônimo</label>
      </div>
    </div>
  );
};
