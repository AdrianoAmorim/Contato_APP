import ReactDOM from 'react-dom/client'
import App from './src/App'
import { GlobalStyles } from './src/GlobalStyled'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <GlobalStyles />
        <App />
    </>
)
