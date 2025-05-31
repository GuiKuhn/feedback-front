import FeedbackMember from "../pages/FeedbackMember";
import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { Confirmation, FeedbackSelection, FeedbackDetails } from "../pages";
import { LandingPage } from "@/pages/LandingPage";
import UserDashboard from "@/pages/UserDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback-details" element={<FeedbackDetails />} />
        <Route path="/feedback-member" element={<FeedbackMember />} />{" "}
        <Route path="/feedback-topics" element={<FeedbackSelection />} />{" "}
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard/:memberId" element={<UserDashboard />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
