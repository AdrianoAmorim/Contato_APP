import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import { Cadastro } from "../pages/Cadastro";
import { Visualizar } from "../pages/Visualizar";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cadastrar",
        element: <Cadastro />
      },
      {
        path: "/editar/:id",
          element: <Visualizar />
      }
    ]
  }
  
]);