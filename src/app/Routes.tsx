import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";
import { FeedbackDetails } from "@/pages/feedback-details";
import FeedbackSelection from "../pages/FeedbackSelection"; // 👈 novo

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/feedback-details" element={<FeedbackDetails></FeedbackDetails>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/feedback" element={<FeedbackSelection />} /> {/* 👈 nova rota */}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
