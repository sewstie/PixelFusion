import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Game from "./pages/Game/Game";
import License from "./pages/License";
import Account from "./pages/Account/Account";
import AddGame from "./pages/AddGame/AddGame";

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
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <ScrollToTop />
      <HeaderWrapper />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/game/:slug" element={<Game />} />
          <Route path="/license" element={<License />} />
          <Route path="/account" element={<Account />} />
          <Route path="/add-your-game" element={<AddGame />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
