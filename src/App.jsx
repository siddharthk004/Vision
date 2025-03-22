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
import LoginAdmin from "./Admin/LoginAdmin";
import AdminDashboard from "./Admin/Layout/AdminDashboard";
import HomeAdmin from "./Admin/Dashboard/HomeAdmin";
import Team from "./Admin/Dashboard/Team";
import Setting from "./Admin/Dashboard/Setting";
import AddProduct from "./Admin/Product Manage/Addproduct";
import UpdateProduct from "./Admin/Product Manage/UpdateProduct";
import ViewProduct from "./Admin/Product Manage/ViewProduct";
import StockView from "./Admin/Product Manage/StockView";
import HomePageAdd from "./Admin/Add Manage/HomePageAdd";
import LogoManagement from "./Admin/Add Manage/LogoManagement";
import SponsorsAdd from "./Admin/Add Manage/SponsorsAdd";
import GrowthAdd from "./Admin/Add Manage/GrowthAdd";
import SupportRequest from "./Admin/Help Desk/SupportRequest";
import OrderHistory from "./Admin/Help Desk/OrderHistory";
import OrderManagement from "./Admin/Help Desk/OrderManagement";
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
      <Route path="/admin/login" element={<LoginAdmin />} />

      <Route path="/admin/*" element={<AdminDashboard />}>
        <Route path="home" element={<HomeAdmin />} />
        <Route path="team" element={<Team />} />
        <Route path="setting" element={<Setting />} />

        <Route path="Product/add" element={<AddProduct />} />
        <Route path="Product/update" element={<UpdateProduct />} />
        <Route path="Product/view" element={<ViewProduct />} />
        <Route path="Product/stock" element={<StockView />} />

        <Route path="AddManagement/HomePageAdd" element={<HomePageAdd />} />
        <Route path="AddManagement/Logo" element={<LogoManagement />} />
        <Route path="AddManagement/SponsorsAdd" element={<SponsorsAdd />} />
        <Route path="AddManagement/GrowthAdd" element={<GrowthAdd />} />

        <Route path="HelpDesk/OrderManagement" element={<OrderManagement />} />
        <Route path="HelpDesk/Orderhistory" element={<OrderHistory />} />
        <Route path="HelpDesk/SupportRequest" element={<SupportRequest />} />
      </Route>
    </Routes>
  );
}

export default App;
