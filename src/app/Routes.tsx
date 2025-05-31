import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage, Confirmation,  FeedbackSelection, FeedbackDetails} from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feedback" element={<FeedbackSelection />} /> {/* 👈 nova rota */}
        <Route path="/feedback-details" element={<FeedbackDetails />} />
        <Route path="/confirmation" element={<Confirmation />} /> {/* 👈 nova rota */}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
