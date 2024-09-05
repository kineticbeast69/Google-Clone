import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./context/contextProvider.jsx";
import SearchPage from "./pages/searchPage.jsx";
import VoiceSearch from "./pages/voicepage.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search/:query/:index",
    element: <SearchPage />,
  },
  {
    path: "/voiceSearch",
    element: <VoiceSearch />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  </StrictMode>
);
