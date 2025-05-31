import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";
import FeedbackSelection from "../pages/FeedbackSelection"; // 👈 novo
import { FeedbackDetails } from "@/pages/feedback-details";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feedback" element={<FeedbackSelection />} /> {/* 👈 nova rota */}
        <Route path="/feedback-details" element={<FeedbackDetails />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
