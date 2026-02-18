import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
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
import ShopGrid from './components/shop/shopGrid.jsx'
import ShopLeftSidebar from './components/shop/shopLeftSidebar.jsx'
import ShopRightSidebar from './components/shop/shopRightSidebar.jsx'
import ProductDetailsLeftSidebar from './components/shop/productDetailsLeftSidebar.jsx'
import ProductDetailsRightSidebar from './components/shop/productDetailsRightSidebar.jsx'
import About from './components/pages/about/About.jsx'
import Cart from './components/pages/Cart.jsx'
import Checkout from './components/pages/Checkout.jsx'
import Compare from './components/pages/Compare.jsx'
import EmptyCart from './components/pages/EmptyCart.jsx'
import FAQ from './components/pages/FAQ.jsx'
import MyAccount from './components/pages/MyAccount.jsx'
import OurTeam from './components/pages/ourTeam/OurTeam.jsx'
import ProjectDetails from './components/pages/ProjectDetails.jsx'
import ProjectGallery from './components/pages/projectGallery/ProjectGallery.jsx'
import TeamProfile from './components/pages/TeamProfile.jsx'
import Wishlist from './components/pages/Wishlist.jsx'
import Error404 from './components/404/error404.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-jobs" element={<ProjectGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServiceDetailsPage />} />
          <Route path="/team" element={<OurTeam />} />
          {/* <Route path="/service" element={<ServicePage />} /> */}
          {/* <Route path="/blog-details-left-sidebar" element={<BlogDetailsLeftSidebar />} />
          <Route path="/blog-details-right-sidebar" element={<BlogDetailsRightSidebar />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/empty-cart" element={<EmptyCart />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-account" element={<MyAccount />} /> */}
          {/* <Route path="/product-details-left-sidebar" element={<ProductDetailsLeftSidebar />} />
          <Route path="/product-details-right-sidebar" element={<ProductDetailsRightSidebar />} />
          <Route path="/project-details" element={<ProjectDetails />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} />
          <Route path="/shop-grid" element={<ShopGrid />} />
          <Route path="/shop-left-sidebar" element={<ShopLeftSidebar />} />
          <Route path="/shop-right-sidebar" element={<ShopRightSidebar />} /> */}
          {/* <Route path="/team-profile" element={<TeamProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/404" element={<Error404 />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
