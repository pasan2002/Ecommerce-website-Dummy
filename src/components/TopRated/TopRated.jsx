import React from "react";
import Image1 from "../../assets/top product/image1.png"
import Image2 from "../../assets/top product/image2.png"
import Image3 from "../../assets/top product/image3.png"
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Vintage Camera Photo Patent Photo T-Shirt",
        description:
        "This patent design taken from the ‘60s breaks down the design of a photographer’s main work tool. As utilitarian as cameras are, they still manage to lend beautiful form to their functionality.",
    },
    {
        id: 2,
        img: Image2,
        title: "Aperture Adventure Photo T-Shirts",
        description:
        "The team at Photogenic Supply offer up this entry as a sort of “choose your own adventure” design. It looks like a landscape drawing with photographic elements sewn into it. You can grab this shirt in a number of colors.",
    },
    {
        id: 3, 
        img: Image3,
        title: "18% Grey Card",
        description:
        "You can get this shirt for your assistant and put it to use during your next shoot. The next best thing to this design would be to sell shirts in this color (18% grey) and advertise them as such, thus eliminating the need to write what it is across the front.",
    }
]

export default function TopRated({handleOrderPopup}){
    return(
        <div>
            <div className="container">
                {/*Header*/}
                <div className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Top Rated Products</h1>
                    <p className="text-xs text-gray-400 ">
                        Dive into our top-selling products that redefine style and comfort. 
                        From chic streetwear to timeless classics.
                    </p>
                </div>
                {/*Body*/}
                <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-20 md:gap-5 place-items-center"
                >
                    {
                        ProductsData.map((data) => (
                            <div
                                data-aos="zoom-in" 
                                className="rounded-2xl bg-white dark:bg-gray-800
                                hover:bg-black/80 dark:hover:bg-primary hover:text-white
                                relative shadow-xl duration-200 group max-w[300px]"
                                key={data.id}
                            >
                                {/*Image section*/}
                                <div className="h-[100px]">
                                    <img src={data.img} alt={data.title} 
                                        className="max-w-[140px] block mx-auto
                                        transform -translate-y-20 group hover:scale-105
                                        duraton-200 drop-shadow-md"
                                    />
                                </div>
                                {/*details section*/}
                                <div className="p-4 text-center">
                                    {/*star rating*/}
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                    </div>
                                    <h1 className="text-xl font-bold">{data.title}</h1>
                                    <p className="text-xs text-gray-500 
                                    group-hover:text-white duration-300 line-clamp-2">
                                        {data.description}
                                    </p>
                                    <button 
                                        className="bg-primary hover:scale-105 duration-300
                                        text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                                        group-hover:text-primary"
                                        onClick={handleOrderPopup}    
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
