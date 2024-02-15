import { data } from "autoprefixer";
import React from "react";
import Slider from "react-slick";

const CardsData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Pasan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Pasindu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Samal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Malani",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/105/105",
    },
]

export default function Comments(){
    
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return(
        <div className="py-10 mb-10">
            <div className="container">
                {/*header*/}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                    Thoughts
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Feedbacks</h1>
                    <p className="text-xs text-gray-400 ">
                        Thoughts from our Valuable Customers about our products and service.
                    </p>
                </div>
                {/*Cards*/}
                <div
                data-aos="zoom-in"
                >
                    <Slider {...settings}>
                        {
                            CardsData.map((data) => (
                                <div className="my-6">
                                    <div
                                    key={data.id}
                                    className="flex flex-col gap-4 shadow-lg 
                                    py-8 px-6 mx-4 rounded-xl 
                                    dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <div className="mb-4">
                                            <img src={data.img} alt="person image" 
                                            className="rounded-full w-20 h-20"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <h1
                                                className="text-xl font-bold text-black/80 dark:text-light"
                                                >
                                                {data.name}
                                                </h1> 
                                                <p
                                                className="text-xs text-gray-500"
                                                >
                                                {data.text}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-blac/20 text-9xl
                                        font-serif absolute top-0 right-0">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}