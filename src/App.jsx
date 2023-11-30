import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/About';
import EnquiryForm from './components/Help/help';
import ShippingPolicy from './components/AllPolicy/Shiping';
import TermsAndConditions from './components/AllPolicy/terms';
import PrivacyPolicy from './components/AllPolicy/privacy';
import Feedback from './components/Feedback/Feed';
import ReturnRefundPolicy from './components/AllPolicy/ReturnRefundPolicy';
import Devlopers from './components/Devlopers/Devlopers';
import Allcatproducts from './pages/allproducts/Allcatproducts';
import AddCoupon from './pages/admin/page/AddCoupon';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<EnquiryForm />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/term-and-conditon" element={<TermsAndConditions />} />
          <Route path="/Shipping" element={<ShippingPolicy />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/ReturnRefundPolicy" element={<ReturnRefundPolicy />} />
          <Route path="/devlopers" element={<Devlopers/>} />
          <Route path="/products" element={<Allcatproducts/>} />


          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
           <Route path='/addcoupon' element={
            <ProtectedRouteForAdmin>
             <AddCoupon/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === "ss4185667@gmail.com"){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}
