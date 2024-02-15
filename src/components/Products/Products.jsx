import React from "react"
import Image1 from "../../assets/women/women.jpg"
import Image2 from "../../assets/women/women2.jpeg"
import Image3 from "../../assets/women/women3.jpg"
import Image4 from "../../assets/women/women4.jpg"
import Image5 from "../../assets/women/women5.jpg"
import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "Orange",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Image2,
        title: "Women Western",
        rating: 5.0,
        color: "Red",
        aosDelay: "2000",
    },
    {
        id: 3,
        img: Image3,
        title: "Goggles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Image4,
        title: "Printed T-shirt",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Image5,
        title: "Fashionable T-Shirt",
        rating: 4.8,
        color: "Black",
        aosDelay: "800",
    },
]

export default function Products(){
    return(
        <div className="mt-14 mb-12">
            <div className="container">
                {/*Header Section*/}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                    Higher standard Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p className="text-xs text-gray-400 ">
                        Dive into our best products that redefine style and comfort. 
                        From chic streetwear to timeless classics.
                    </p>
                </div>
                {/*Body Section*/}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 
                    lg:grid-cols-5 place-items-center gap-5">
                    {/*Card Section*/}
                    {
                        ProductsData.map((data) => (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className="space-y-3"
                            >
                                <img src={data.img} alt={data.title} 
                                className="h-[220px] w-[150px] object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-600">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-500"/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    {/*View all button*/}
                    <div className="flex justify-center">
                        <button
                        className="text-center mt-10 cursor-pointer 
                        bg-primary text-white py-1 px-5 rounded-md"
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}