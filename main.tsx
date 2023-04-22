import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./src/GlobalStyled";
import { RouterProvider } from "react-router-dom";
import { router } from "./src/routes";
import { HeaderProvider } from "./src/contexts/HeaderContext";
import { ContactProvider } from "./src/contexts/ContactContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContactProvider>
    <HeaderProvider>
        <GlobalStyles/>
        <RouterProvider router={router} />
    </HeaderProvider>
  </ContactProvider>
);
