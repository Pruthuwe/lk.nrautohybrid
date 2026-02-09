import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import LoginPage from './components/login/LoginPage.jsx'
import RegisterPage from './components/login/RegisterPage.jsx'
import ServicePage from './components/services/ServicePage.jsx'
import ServiceDetailsPage from './components/services/ServiceDetailsPage.jsx'
import ContactPage from './components/contact/ContactPage.jsx'
import BlogGrid from './components/blog/blogGrid.jsx'
import BlogDetailsLeftSidebar from './components/blog/blogDetailsLeftSidebar.jsx'
import BlogDetailsRightSidebar from './components/blog/blogDetailsRightSidebar.jsx'
import BlogLeftSidebar from './components/blog/blogLeftSidebar.jsx'
import BlogRightSidebar from './components/blog/blogRightSidebar.jsx'

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
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-details-left-sidebar" element={<BlogDetailsLeftSidebar />} />
          <Route path="/blog-details-right-sidebar" element={<BlogDetailsRightSidebar />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
