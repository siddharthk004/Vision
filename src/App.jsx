import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Login from "./UserInfo/Login";
import Register from "./UserInfo/Register";
import Pesticide from "./components/Pesticide";
import ProductDetailspest from "./components/ProductDetailspest";
import Profile from "./components/Home/Profile";
import HelpCenter from "./components/Home/HelpCenter";
import EditProfile from "./components/Home/EditProfile";
import WishList from "./components/UserInfoPages/WishList";
import Cart from "./components/UserInfoPages/Cart";
import Payment from "./components/Card/PaymentPage";
import BuyProduct from "./components/UserInfoPages/BuyProduct";
import Aboutus from "./components/About/Aboutus";
import Faq from "./components/About/Faq";
import Support from "./components/About/Support";
import Privacypolicys from "./components/About/Privacypolicys";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route path="/pesticide" element={<Pesticide />} />

      <Route path="/profileSection" element={<Profile />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/wishlistView" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buyproduct" element={<BuyProduct />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/editprofile" element={<EditProfile />} />

      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/privacypolicy" element={<Privacypolicys />} />
      <Route path="/support" element={<Support />} />
      <Route path="/faq" element={<Faq />} />

      <Route path="/ProductDetailspest/:id" element={<ProductDetailspest />} />
    </Routes>
  );
}

export default App;
