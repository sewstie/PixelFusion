import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Contact from "./pages/Contact/Contact";
import Game from "./pages/Game/Game";

const HeaderWrapper = () => {
  const location = useLocation();
  return !location.pathname.startsWith("/game") && <Header />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HeaderWrapper />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game/:slug" element={<Game />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
