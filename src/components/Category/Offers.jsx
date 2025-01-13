import React from "react";
import Offer from "./Offer";

function Offers() {
  var data = [
    {
      url: "data:image/jpeg;base64,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",
      text1: "Get 100 Rs OFF",
      text2: "On Your First Order",
    },
    {
      url: "data:image/png;base64,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",
      text1: "Free Delivery",
      text2: "On Order",
    },
    {
      url: "data:image/jpeg;base64,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",
      text1: "Get 200 Rs OFF ",
      text2: "Order Above 2100",
    },
  ];
  return (
    <div className="flex pb-4 pt-4 border-t-2 border-b-2 border-green-800">
      {data.map((item, index) => (
        <Offer data={item} index = {index} key={index} />
      ))}
    </div>
  );
}

export default Offers;
