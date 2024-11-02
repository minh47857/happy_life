import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <Layout />
        </StrictMode>
    </BrowserRouter>
)
