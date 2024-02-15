import React from "react";
import Banner from "../../assets/subscription/orange-pattern.jpg"

const Sub_back_Image = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat:"cover",
    height:"100%",
    width:"100%",
}

export default function Subscribe(){
    return(
            <div 
            data-aos="zoom-in"
            className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
            style={Sub_back_Image}
            >
                    <div className="container backdrop:blur-sm py-10">
                        <div className="space-y-6 max-w-xl mx-auto">
                            <h1
                            className="text-2xl text-center sm:text-left
                            sm:text-4xl font-semibold"
                            >
                                Get Notified About New Arrivals
                            </h1>
                            <input data-aos="fade-up" type="text" 
                            placeholder="Enter your Email Address"
                            className="w-full p-3"
                            />
                        </div>
                    </div>
            </div>
    )
}