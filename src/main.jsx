import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import About from "../src/components/Navbar/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

    ],
  },
]);

// Création et rendu de la racine de l'application React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
    {/* Fournisseur de routage pour l'application */}
  </React.StrictMode>
);
