import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allproducts/AllProducts";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AddProduct from "./pages/admin/page/AddProduct"
import Cart from "./pages/cart/Cart";
import Nopage from "./pages/nopage/NoPage";
import Order from "./pages/Order/Order";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import UpdateProduct from "./pages/admin/page/UpdadateProduct";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/updateproduct" element={<UpdateProduct/>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  );
}
