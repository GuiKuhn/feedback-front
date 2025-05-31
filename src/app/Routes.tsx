import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";
import FeedbackSelection from "../pages/FeedbackSelection"; // 👈 novo

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feedback" element={<FeedbackSelection />} /> {/* 👈 nova rota */}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
