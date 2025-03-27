import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Login from "./UserInfo/Login";
import Register from "./UserInfo/Register";
import Pesticide from "./components/Pesticide";
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
import UpdateProduct from "./Admin/ProductManage/UpdateProduct";
import ViewProduct from "./Admin/ProductManage/ViewProduct";
import StockView from "./Admin/ProductManage/StockView";
import HomePageAdd from "./Admin/AddManage/HomePageAdd";
import LogoManagement from "./Admin/AddManage/LogoManagement";
import SponsorsAdd from "./Admin/AddManage/SponsorsAdd";
import ProductAdd from "./Admin/AddManage/ProductAdd";
import SupportRequest from "./Admin/HelpDesk/SupportRequest";
import OrderHistory from "./Admin/HelpDesk/OrderHistory";
import OrderManagement from "./Admin/HelpDesk/OrderManagement";
import AddProduct from "./Admin/ProductManage/AddProduct";
import ProductDetails from "./components/ProductDetails";
import Category from "./Admin/Category/Category";
import Brand from "./Admin/Brand/Brand";
import OfferStripe from "./Admin/Brand/OfferStripe";
import ViewUser from "./Admin/UserManage/ViewUser";
import CommentView from "./Admin/CommentManage/CommentView";
import UpdateAbout from "./Admin/AboutManage/UpdateAbout";
import UpdateContact from "./Admin/AboutManage/UpdateContact";
import UpdateSocialHandles from "./Admin/AboutManage/UpdateSocialHandles";


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

      <Route path="/user/product/id/:id" element={<ProductDetails />} />
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
        <Route path="AddManagement/GrowthAdd" element={<ProductAdd />} />

        <Route path="HelpDesk/OrderManagement" element={<OrderManagement />} />
        <Route path="HelpDesk/Orderhistory" element={<OrderHistory />} />
        <Route path="HelpDesk/SupportRequest" element={<SupportRequest />} />

        <Route path="Category" element={<Category />} />

        <Route path="brand" element={<Brand />} />
        <Route path="offer" element={<OfferStripe />} />

        <Route path="comment" element={<CommentView />} />

        <Route path="abouttext" element={<UpdateAbout />} />
        <Route path="contact" element={<UpdateContact />} />
        <Route path="social" element={<UpdateSocialHandles />} />
 
        <Route path="user" element={<ViewUser />} />


      </Route>
    </Routes>
  );
}

export default App;
