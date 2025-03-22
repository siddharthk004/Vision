import React from "react";
import Stripe from "./Stripe";

function StripesDet() {
  var data = [
    "50 +", "Brands" ,
    "1000 +", "products" ,
    "150 +", "Delivery Avaliable" ,
  ];
  return <div>
    <Stripe data={data} />
  </div>;
}

export default StripesDet;