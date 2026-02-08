import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Maintenance from "./pages/Maintenance";

// Fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

/**
 * 🔒 MAINTENANCE TOGGLE
 * true  = show maintenance page only
 * false = normal website live
 */
const MAINTENANCE_MODE = true;

function App() {
  if (MAINTENANCE_MODE) {
    return (
      <>
        <Maintenance />
        <Analytics />
      </>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Vercel Analytics */}
        <Analytics />
      </BrowserRouter>
    </div>
  );
}

export default App;
