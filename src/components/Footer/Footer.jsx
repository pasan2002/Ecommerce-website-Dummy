import React from "react";
import Logo from "../../assets/logo.png"
import FooterBanner from "../../assets/footer/footer-pattern.jpg"
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const Banner = {
    backgroundImage: `url(${FooterBanner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

export default function Footer() {
    return (
        <div style={Banner} className="text-white">
            <div 
            data-aos="zoom-in"
            className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left
                        text-justify mb-3 flex items-center gap-3">
                            <img src={Logo} alt="" className="max-w-[50px]" />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cum in beatae ea recusandae blanditiis veritatis.
                        </p>
                    </div>
                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3
                    col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1
                                    className="sm:text-3xl text-xl font-bold
                                sm:text-left text-justify mb-3"
                                >Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((link) => (
                                            <li
                                                className="cursor-pointer
                                            hover:text-primary
                                            hover:translate-x-1 duration-300 text-gray-200"
                                                key={link.title}
                                            >
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1
                                    className="sm:text-3xl text-xl font-bold
                                sm:text-left text-justify mb-3"
                                >Useful Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((link) => (
                                            <li
                                                className="cursor-pointer
                                            hover:text-primary
                                            hover:translate-x-1 duration-300 text-gray-200"
                                                key={link.title}
                                            >
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Social Links and Contact Information */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#" alt="Instagram">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#" alt="Facebook">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#" alt="LinkedIn">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Thihariya, Nittambuwa</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <FaMobileAlt />
                                    <p>+91 123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
