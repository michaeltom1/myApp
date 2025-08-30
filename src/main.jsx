import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./Context/DataProvider.jsx";

// Register service worker for offline functionality
if (import.meta.env.PROD) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js", { type: "module" })
        .then((registration) => {
          console.log("SW registered:", registration);
        })
        .catch((error) => {
          console.log("SW registration failed:", error);
        });
    });
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
