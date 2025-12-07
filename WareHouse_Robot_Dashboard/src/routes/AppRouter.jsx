import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useStore from "../store/useStore";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import BotStatusPage from "../pages/BotStatusPage";
import TaskAllocationPage from "../pages/TaskAllocationPage";
import TaskQueuePage from "../pages/TaskQueuePage";
import AnalyticsPage from "../pages/AnalyticsPage";
import MapPage from "../pages/MapPage";

function PrivateRoute({ children }) {
  const loggedIn = useStore(state => state.auth.loggedIn);
  return loggedIn ? children : <Navigate to="/login" replace />;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/bots" element={<PrivateRoute><BotStatusPage /></PrivateRoute>} />
      <Route path="/allocate" element={<PrivateRoute><TaskAllocationPage /></PrivateRoute>} />
      <Route path="/queue" element={<PrivateRoute><TaskQueuePage /></PrivateRoute>} />
      <Route path="/analytics" element={<PrivateRoute><AnalyticsPage /></PrivateRoute>} />
      <Route path="/map" element={<PrivateRoute><MapPage /></PrivateRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
