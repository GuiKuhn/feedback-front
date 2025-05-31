import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";
import { FeedbackDetails } from "@/pages/feedback-details";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/feedback-details" element={<FeedbackDetails></FeedbackDetails>} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
