import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodosContextProvider } from "./context/TodoContext";
import App from "./App";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </StrictMode>
);
