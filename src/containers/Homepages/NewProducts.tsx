"use client";

import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";

const products = [
    {
        name: "Buttons tweed blazer",
        price: 59,
        tag: "NEW",
        image: "/images/test01.jpg",
        status: "available",
    },
    {
        name: "Flowy striped skirt",
        price: 49,
        image: "/images/product2.jpg",
        status: "available",
    },
    {
        name: "Cotton T-Shirt",
        price: 59,
        image: "/images/product3.jpg",
        status: "out-of-stock",
    },
    {
        name: "Slim striped pocket shirt",
        price: 59,
        image: "/images/product4.jpg",
        status: "available",
    },
    {
        name: "Yellow striped shirt",
        price: 45,
        image: "/images/product5.jpg",
        status: "available",
        tag: "SALE",
    },
    {
        name: "Animal print shirt",
        price: 39,
        image: "/images/product6.jpg",
        status: "available",
        tag: "SALE",
    },
    {
        name: "White dress",
        price: 55,
        image: "/images/product7.jpg",
        status: "available",
    },
    {
        name: "Pink print shirt",
        price: 49,
        image: "/images/product8.jpg",
        status: "available",
        tag: "SALE",
    },
];

export default function NewProducts() {
    return (
        <section className="product spad">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center mb-6">
                    <div className="w-full md:w-1/3">
                        <div className="section-title">
                            <h4>New product</h4>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <ul className="filter__controls flex flex-wrap gap-4 justify-end">
                            <li className="active cursor-pointer" >All</li>
                            <li className="cursor-pointer" >Headphone/Speaker</li>
                            <li className="cursor-pointer" >Monitor</li>
                            <li className="cursor-pointer" >Gaming</li>
                            <li className="cursor-pointer">Accessories</li>
                            <li className="cursor-pointer">Keyboard</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 property__gallery">
                    {/* <!-- Product Item Start --> */}
                    <div className="product__item">
                        <div
                            className="product__item__pic set-bg"
                            style={{ backgroundImage: "url(/images/test01.jpg)" }}
                        >
                            <div className="label new">New</div>
                            <ul className="product__hover">
                                <li>
                                    <a href="/" className="">
                                        <span className="">
                                            <FaRegEye />
                                        </span >
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="">
                                            <FaRegHeart />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="">
                                            <LiaShoppingBagSolid />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Headphone</a></h6>
                            <div className="rating flex justify-center gap-2">
                                <i className=""><BiStar size={16} /></i>
                                <i className=""><BiStar size={16} /></i>
                                <i className=""><BiStar size={16} /></i>
                                <i className=""><BiStar size={16} /></i>
                                <i className=""><BiStar size={16} /></i>
                            </div>
                            <div className="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
