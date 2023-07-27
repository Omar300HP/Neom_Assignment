import { BrowserRouter, Route, Routes } from "react-router-dom";
import Providers from "../providers";
import { LoginPage } from "./LoginPage";

import { Dashboard } from "./DashboardPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  );
};
