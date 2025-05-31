import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";
import FeedbackSelection from "../pages/FeedbackSelection";
import Confirmation from "../pages/FeedbackConfirmation"; // 👈 importar a nova tela

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feedback" element={<FeedbackSelection />} />
        <Route path="/confirmation" element={<Confirmation />} /> {/* 👈 nova rota */}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
