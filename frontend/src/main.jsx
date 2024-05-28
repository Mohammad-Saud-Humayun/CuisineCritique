import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth0Provider
        domain="dev-review-app.us.auth0.com"
        clientId="zht5CqNE9wclJk4J8m5eWZf7iZuRGbYZ"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>
);
