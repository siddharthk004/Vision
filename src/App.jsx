import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Login from "./UserInfo/Login";
import Register from "./UserInfo/Register";
import OrganicFarm from "./components/Products_variety/OrganicFarm";
import BioFertilizer from "./components/Products_variety/BioFertilizer";
import Booster from "./components/Products_variety/Booster";
import Fertilizer from "./components/Products_variety/Fertilizer";
import Fungicide from "./components/Products_variety/Fungicide";
import Herbicide from "./components/Products_variety/Herbicide";
import Insecticide from "./components/Products_variety/Insecticide";
import Nutrient from "./components/Products_variety/Nutrient";
import Pesticide from "./components/Products_variety/Pesticide";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsfungi from "./components/ProductDetail/ProductDetailsfungi";
import ProductDetailsherbi from "./components/ProductDetail/ProductDetailsherbi";
import ProductDetailsinsect from "./components/ProductDetail/ProductDetailsinsect";
import ProductDetailsnutri from "./components/ProductDetail/ProductDetailsnutri";
import ProductDetailspest from "./components/ProductDetail/ProductDetailspest";
import ProductDetailsorgan from "./components/ProductDetail/ProductDetailsorgan";
import ProductDetailsbiof from "./components/ProductDetail/ProductDetailsbiof";
import ProductDetailsboost from "./components/ProductDetail/ProductDetailsboost";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route path="/organFarm" element={<OrganicFarm />} />
      <Route path="/biofertilizer" element={<BioFertilizer />} />
      <Route path="/booster" element={<Booster />} />
      <Route path="/fertilizer" element={<Fertilizer />} />
      <Route path="/fungicide" element={<Fungicide />} />
      <Route path="/herbicide" element={<Herbicide />} />
      <Route path="/insecticide" element={<Insecticide />} />
      <Route path="/nutrient" element={<Nutrient />} />
      <Route path="/pesticide" element={<Pesticide />} />

      <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      <Route path="/ProductDetailsfungi/:id" element={<ProductDetailsfungi />} />
      <Route path="/ProductDetailsherbi/:id" element={<ProductDetailsherbi />} />
      <Route path="/ProductDetailsinsect/:id" element={<ProductDetailsinsect />} />
      <Route path="/ProductDetailsnutri/:id" element={<ProductDetailsnutri />} />
      <Route path="/ProductDetailsorgan/:id" element={<ProductDetailsorgan />} />
      <Route path="/ProductDetailspest/:id" element={<ProductDetailspest />} />
      <Route path="/ProductDetailsboost/:id" element={<ProductDetailsboost />} />
      <Route path="/ProductDetailsbiof/:id" element={<ProductDetailsbiof />} />
    </Routes>
  );
}

export default App;
