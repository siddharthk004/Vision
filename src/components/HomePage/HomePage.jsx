import React from "react";
import Ads from "../AddDisplay/Ads";
import Categorys from "../Category/Categorys";
import Exclusive from "../Category/Exclusive";
import Home from "../Home";
import Selling from "../Category/Selling";
import SellingOffer from "../Category/SellingOffer";
import Show from "../AddDisplay/Show";
import Offers from "../Category/Offers";
import Farmer from "../AddDisplay/Farmer";
import Brands from "../AddDisplay/Brands";
import Abouts from "../About/Abouts";
import GrowthAds from "../AddDisplay/GrowthAds";
import Stripes from "../AddDisplay/Stripes"; 
import StripesDet from "../AddDisplay/StripesDet";
import "./index.css"; // Import CSS for hiding scrollbar

function HomePage() { 
  return (
    <div className="bg-zinc-100 overflow-hidden no-scrollbar h-screen overflow-y-scroll">
      {/* Home Screen Their having main navbar and only navbar */}
      <Home />
      {/* Ads Screen Their having Images Are Moving */}
      <Ads />
      {/* stripe that having condition and some text */}
      {/* <br /> */}
      {/* Category Section Their having category of what we sell */}
      <Exclusive value={"Categories"} />
      <Categorys />
      <Stripes />
      {/* Offer Screen  having Offer section in their are some products are on sell only for today */}
      <Exclusive value={"-- Special Offer On Pesticides Only --"} />
      <SellingOffer />
      {/* Fermer Section having farmer image */}
      <Farmer />
      {/* Exclusive Screen  having Exclusive product section in their are some products are on Exclusive only for today */}
      <Exclusive value={"Exclusive Products Of The Day"} />
      <Show />
      {/* Offer Screen  having offer on Cards */}
      <Offers />
      {/* selling Screen  having best selling product of the day */}
      <Exclusive value={" Best Selling Of The Day"} />
      <Selling />

      <div className="bg-zinc-100 h-10 w-full"/>  
      {/* growth Screen  having growth pesticide recommandation */}
      <GrowthAds />
      {/* growth Section  having need for growth products */}
      <Exclusive value={"Growth Promoters"} />
      <Show />
      {/* Brand Section having All brand that are we sell their products */}
      <Exclusive value={" Brands "} />
      <Brands />
      {/* Stripe Detail having they sell to how many and count of product brand  */}
      {/* <StripesDet /> */}
      {/* about section having all conditions and links are all stuff are in the about section */}
      <Abouts />
    </div>
  );
}

export default HomePage;
