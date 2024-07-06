import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Home/Hero";
import Productshop from "./Components/Shop/ProductShop";
import Layout from "./Layout";
import Women from "./Components/Women/Women";
import Checkout from "./Components/Check/Checkout";
import PageNot from "./Components/Page/Pagenot";
import AddProduct from "./Components/Admin/AddProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import DeleteProduct from "./Components/Admin/DeleteProduct";
import ContactUs from "./Components/Contact/ContactUs";
import ManageProduct from "./Components/Admin/ManageProduct";
import Dashboard from "./Components/Admin/Dashboard";
import Man from "./Components/Man/Man";
import LogIn from "./Components/Login/LogIn";
import Register from "./Components/Register/Register";
import Account from "./Components/Account/Account";
import AdminLogin from "./Components/Admin/Adminlogin/AdminLogin";
import Detail from "./Components/ProductDetatils/Detail";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Favourite/Whishlist";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/productshop" element={<Productshop />} />
            <Route path="/man" element={<Man />} />
            <Route path="/women" element={<Women />} />
            <Route path="/check" element={<Checkout />} />
            <Route path="/Login" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/wish" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNot />} />
          </Route>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/Admin/dashboard" element={<Dashboard />} />
          <Route path="/Admin/add" element={<AddProduct />} />
          <Route path="/Admin/manage" element={<ManageProduct />} />
          <Route path="/Admin/update/:id" element={<UpdateProduct />} />
          <Route path="/Admin/delete/:id" element={<DeleteProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
