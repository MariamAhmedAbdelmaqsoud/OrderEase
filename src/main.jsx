import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import { UserProvider } from './Context/UserContext.jsx';
UserProvider
createRoot(document.getElementById('root')).render(
  <UserProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </UserProvider>
)
