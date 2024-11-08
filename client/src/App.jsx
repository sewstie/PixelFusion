import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
