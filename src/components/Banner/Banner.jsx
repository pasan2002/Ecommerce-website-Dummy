import React from "react";
import BannerImage from "../../assets/banner/women3.jpg"
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";

export default function Banner(){
    return(
        <div className="min-h-[550px] flex justify-center 
        items-center py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2
                gap-6 items-center">
                {/*Image section*/}
                    <div data-aos="zoom-in">
                        <img src={BannerImage} alt="Banner Image" 
                        className="max-w-[400px] h-[350px] w-full 
                        mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </div>
                {/*Details section*/} 
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                        <h1 
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl font-bold"
                        >
                            New Year Sale upto 50% off
                        </h1>
                        <p 
                        data-aos="fade-up"
                        className="text-sm text-gray-500 tracking-wide leading-5">
                            It's time to celebrate a fresh start with incredible deals! 
                            Our New Year Sale is here, offering massive discounts up to 50% 
                            off on your favorite items.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div
                             data-aos="fade-up" className="flex items-center gap-4"
                            >
                                <GrSecure 
                                className="text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full bg-violet-100 dark:bg-violet-600"
                                />
                                <p>Quality Products</p>
                            </div>
                            <div
                            data-aos="fade-up" className="flex items-center gap-4"
                            >
                                <FaShippingFast 
                                className="text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full bg-orange-100 dark:bg-orange-400"
                                />
                                <p>Fast Delivery</p>

                            </div>
                            <div
                            data-aos="fade-up" className="flex items-center gap-4"
                            >
                                <RiSecurePaymentFill 
                                className="text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full bg-green-100 dark:bg-green-400"
                                />
                                <p>Secure Pyment Methods</p>
                            </div>    
                            <div
                            data-aos="fade-up"
                            className="flex items-center gap-4"
                            >
                                <BiSolidOffer
                                className="text-4xl h-12 w-12 shadow-sm p-4 
                                rounded-full bg-yellow-100 dark:bg-yellow-600"
                            />
                                <p>Good Offers</p>
                            </div>
   
                             
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    )
}



