import FeedbackMember from "../pages/FeedbackMember";
import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage";''
import Dashboard from "@/pages/UserDashboard";
import { MainPage, Confirmation,  FeedbackSelection, FeedbackDetails, FeedbackHero} from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback-details" element={<FeedbackDetails />} />
        <Route path="/feedback-member" element={<FeedbackMember />} />{" "}
        <Route path="/feedback-topics" element={<FeedbackSelection />} />{" "}
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback-hero" element={<FeedbackHero />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
