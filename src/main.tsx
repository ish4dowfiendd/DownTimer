import React from "react";
import ReactDOM from "react-dom/client";
import { AlertProvider } from "./context/AlertContext";
import { ActionStatusProvider } from "./context/ActionStatus";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlertProvider>
      <ActionStatusProvider>
        <App />
      </ActionStatusProvider>
    </AlertProvider>
  </React.StrictMode>,
);
