import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { EventsProvider } from "./contexts/event.cotext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EventsProvider>
      <Router>
        <App />
      </Router>
    </EventsProvider>
  </React.StrictMode>
);
