import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext.jsx";

import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Game from "./pages/Game/Game";
import License from "./pages/License";
import Account from "./pages/Account/Account";
import AddGame from "./pages/AddGame/AddGame";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm/PasswordResetConfirm";

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
    <AuthProvider>
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/password-reset-confirm"
              element={<PasswordResetConfirm />}
            />
          </Routes>
        </section>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
