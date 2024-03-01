import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alphatrade from "./pages/alphatrade.tsx";
import Imagegeneration from "./pages/imagegeneration.tsx";
import Kidangastore from "./pages/kidangastore.tsx";
import Simpleshell from "./pages/simpleshell.tsx";
import Magicmultitone from "./pages/magicmultitone.tsx";
import RestfulAPI from "./pages/restfulAPI.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alpha-trade" element={<Alphatrade/>} />
        <Route path="/restful-api" element={<RestfulAPI/>} />
        <Route path="/alx-multitone-magic" element={<Magicmultitone/>} />
        <Route path="/simple-shell" element={<Simpleshell/>} />
        <Route path="/kidanga-store" element={<Kidangastore/>} />
        <Route path="/image-generation-app" element={<Imagegeneration/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
