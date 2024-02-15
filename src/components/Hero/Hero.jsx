import React from "react"
import Sale from "../../assets/hero/sale.png"
import Shopping from "../../assets/hero/shopping.png"
import Women from "../../assets/hero/women.png"
import Slider from "react-slick"
const ImageList = [
{
id: 1,
img: Shopping,
title: "Upto 50% off on all Men's wear.",
description:
"🎉 Elevate your style with up to 50% off at our Men's Wear Extravaganza! Limited time only. 🕺💼" 
},
{
id: 2,
img: Women,
title: "Upto 30% off on all Women's wear.",
description:
"🌟 Shop our Women's Wear Bonanza! Up to 30% off on chic styles. Elevate your wardrobe on a budget. Hurry, don't miss out! 💃👗" 
},
{
id: 3,
img: Sale,
title: "70% off on all Products Sale",
description:
"🌟 Shop now for the ultimate 70% off sale! Upgrade your style, home, and tech without breaking the bank. Limited time offer! 🎉🛍️" 
}
]
export default function Hero({handleOrderPopup}){
var settings = {
dots: false,
arrows: false,
infinite: true,
speed: 800,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 4000,
cssEase: "ease-in-out",
pauseOnHover: false,
pauseOnFocus: true,
}
return(
<div className="relative overflow-hidden min-h-[550px] 
   sm:min-h-[650px] bg-gray-100 flex justify-center items-center 
   dark:bg-gray-950 dark:text-white duration-200">
   {/*Background*/} 
   <div className="h-[700px] w-[700px] bg-primary/40 
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
   {/*Hero section*/}
   <div className="container pb-8 sm:pb-0">
      <Slider {...settings}>
         {ImageList.map((data) => (
         <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
               {/*Text*/}
               <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 
                     data-aos="zoom-out"
                     data-aos-duration="500"
                     data-aos-once="true"
                     className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                     {data.title}
                  </h1>
                  <p 
                     data-aos="fade-up"
                     data-aos-duration="500"
                     data-aos-delay="100"
                     className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                     data-aos="fade-up"
                     data-aos-duration="500"
                     data-aos-delay="300"
                  >
                     <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary
                        transition-all duration-200 text-white py-1 px-4 
                        rounded-full  flex items-center gap-3 group">
                     Order Now
                     </button>
                  </div>
               </div>
               {/*Images*/}
               <div className="order-1 sm:order-2">
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10"
                  >
                     <img src={data.img} alt="" 
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                        />
                  </div>
               </div>
            </div>
         </div>
         ))}
      </Slider>
   </div>
</div>
)
}