import React, { useState, useEffect } from "react";

function Ad() {
  const data = [
    {
      url: "https://content.jdmagicbox.com/v2/comp/kathua/l7/9999p1922.1922.231118080920.c1l7/catalogue/choudhary-seeds-fertilizer-and-pesticides-store-kharote-kathua-agricultural-product-wholesalers-v57ej8ianp.jpg",
    },
    {
      url: "https://utkarshagro.com/cdn/shop/articles/WhatsApp-Image-2021-09-02-at-6.13.49-PM.jpg?v=1684492397",
    },
    {
      url: "https://utkarshagro.com/cdn/shop/articles/Artboard_1_92.png?crop=center&height=2048&v=1732538640&width=2048",
    },
    {
      url: "https://utkarshagro.com/cdn/shop/articles/1_58_1.png?v=1723458851",
    },
    {
      url: "https://utkarshagro.com/cdn/shop/articles/WhatsApp-Image-2022-07-29-at-11.20.32-AM-1.jpg?v=1684481218",
    },
    {
      url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4594503c-ec49-4590-b003-73f7cbedb3fd.__CR0,0,970,600_PT0_SX970_V1___.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % data.length);
        setIsAnimating(false); // End animation
      }, 200); // Animation duration matches the CSS duration
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="flex justify-center items-center">
      {data.slice(currentIndex, currentIndex + 2).map((item, index) => (
        <img
          key={index}
          className={`h-[65vh] w-[50vw] border-t-[1px] border-b-[1px] overflow-hidden border-zinc-900 transition-opacity duration-500 ${
            isAnimating ? "opacity-50" : "opacity-100"
          }`}
          src={item.url}
          alt=""
        />
      ))}
    </div>
  );
}

export default Ad;
