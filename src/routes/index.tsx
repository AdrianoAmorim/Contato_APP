import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { Cadastro } from "../pages/Cadastro";
import { Visualizar } from "../pages/Visualizar";
import { Home } from "../pages/Home";
import { Configuracao } from "../pages/Configuracao";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cadastrar",
        element: <Cadastro />,
      },
      {
        path: "/editar/:id",
        element: <Cadastro />,
      },
      {
        path: "/visualizar/:id",
        element: <Visualizar />,
      },
      {
        path: "/configuracao",
        element: <Configuracao />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
