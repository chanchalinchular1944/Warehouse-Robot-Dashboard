import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AppTimers from "./utils/AppTimers";
import Navbar from "./components/common/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AppTimers />
        <div className="container mx-auto px-4 py-6">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}
