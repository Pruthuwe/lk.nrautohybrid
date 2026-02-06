import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import LoginPage from './components/login/LoginPage.jsx'
import RegisterPage from './components/login/RegisterPage.jsx'
import ServicePage from './components/services/ServicePage.jsx'
import ServiceDetailsPage from './components/services/ServiceDetailsPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
