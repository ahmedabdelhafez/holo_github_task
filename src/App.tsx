import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar";
import Home from "./pages/home/home";
import SearchPage from "./pages/search_page/SearchPage";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* application routes */}
          <Route index element={<SearchPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
