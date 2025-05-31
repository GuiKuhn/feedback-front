import FeedbackMember from "../pages/FeedbackMember";
import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage, Confirmation,  FeedbackSelection, FeedbackDetails} from "../pages";

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
        <Route path="/confirmation" element={<Confirmation />} /> 
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
