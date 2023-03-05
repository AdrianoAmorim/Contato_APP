import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './src/routes'
import { RouterProvider } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from "./src/themes"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={LightTheme}>
    <React.StrictMode>
      <RouterProvider router={AppRoutes} />
    </React.StrictMode>
  </ThemeProvider>
)
