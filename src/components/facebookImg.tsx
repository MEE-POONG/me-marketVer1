import React from "react";
import { FaFacebook } from "react-icons/fa";

const FacebookImg: React.FC = () => {
    const images = [
        "images/test01.jpg",
        "images/test02.jpg",
        "images/test03.jpg",
        "images/test04.jpg",
        "images/test05.jpg",
        "images/test06.png",
    ];

    return (
        <div className="instagram">
            <div className="w-full">
                <div className="flex flex-wrap">
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/3 lg:w-1/6 p-0"
                        >
                            <div
                                className="instagram__item bg-cover bg-center h-48 relative "
                                style={{ backgroundImage: `url(${imgSrc})` }}
                            >
                                <div className="instagram__text">
                                    <i><FaFacebook size={20} /></i>
                                    <a href="#" className="hover:underline">Me Market</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacebookImg;
