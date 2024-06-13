import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import HomePage from "./pages/homePage";
import ImageToText from "./pages/ImgToTxt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/image-to-text" element={<ImageToText/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

