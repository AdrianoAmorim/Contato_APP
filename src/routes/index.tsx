import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import { Cadastro } from "../pages/Cadastro";
import { Editar } from "../pages/Editar";
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
        path: "/editar",
          element: <Editar />
      }
    ]
  }
  
]);