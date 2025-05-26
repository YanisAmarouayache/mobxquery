import React from "react";
import UsersPage from "./pages/UsersPage";
import PageLayout from "./components/PageLayout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<UsersPage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
