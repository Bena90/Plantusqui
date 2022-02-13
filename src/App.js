//import ItemList from './components/itemList/itemList';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/cartContext';
import CartPage from './pages/CartPage';
import { CheckOut } from './pages/CheckOutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import PanelUser from './pages/PanelUser';
import ForgotPage from './pages/ForgotPage';
import UpdateProfilePage from './pages/UpdateProfilePage';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path="/">
                      <Route index element={<HomePage/>}/>
                      <Route path="products">
                        <Route index element={<ProductPage/>} />
                        <Route path=":productId" element={<ProductDetailsPage/>} />
                      </Route>
                      <Route path="cart" element={<CartPage/>}/>
                      <Route path="checkout/:orderId" element={<CheckOut/>}/>
                      <Route path="about" element={<AboutPage/>}/>
                      <Route path="contact" element={<ContactPage/>}/>
                      <Route path="signup" element={<SignUpPage/>}/>
                      <Route path="panel" element={<PanelUser/>}/>
                      <Route path="login" element={<LoginPage/>}/>
                      <Route path="forgot" element={<ForgotPage/>}/>
                      <Route path="update" element={<UpdateProfilePage/>}/>
                      <Route path="*" element={<NotFoundPage/>}/>

                  </Route>
              </Routes>
              
          </BrowserRouter>
        </div>
        <Footer/>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
