import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { MainPage } from "../pages";
import FeedbackMember from "../pages/FeedbackMember";
import FeedbackSelection from "../pages/FeedbackSelection"; // 👈 novo
import { FeedbackDetails } from "@/pages/feedback-details";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feedback-details" element={<FeedbackDetails />} />
        <Route path="/feedback-member" element={<FeedbackMember />} />{" "}
        <Route
          path="/feedback-topics"
          element={<FeedbackSelection />}
        />{" "}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
