import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<MainPage></MainPage>} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
