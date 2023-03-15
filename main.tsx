import ReactDOM from 'react-dom/client'
import App from './src/App'
import { GlobalStyles } from './src/GlobalStyled'
import { RouterProvider } from 'react-router-dom'
import { router } from './src/routes'
import { ContextProvider } from './src/contexts/ButtonHeaderContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
    </ContextProvider>
)
