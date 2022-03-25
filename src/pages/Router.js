import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import MessagesPage from "./Messages";

import Authenticated from "../components/Authenticated";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course-detail/:id"
            element={
              <Authenticated>
                <CourseDetail />
              </Authenticated>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Routes>
      </Router>
    </div>
  );
}
