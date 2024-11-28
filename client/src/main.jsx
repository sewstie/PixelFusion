import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-r4ov7zfey0u74nqf.us.auth0.com"
      clientId="wokz0jkfSoMJKIe1mc3qbb99stQ6iuba"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
