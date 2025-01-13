import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    "Safe And Secure", "Payments" ,
    "Best Price", "Assured" ,
    "Expert Advice", "& Trusted",
  ];
  return <div>
    <Stripe data={data} />
  </div>;
}

export default Stripes;