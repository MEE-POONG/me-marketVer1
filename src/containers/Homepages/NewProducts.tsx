import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        category: "Headphone/Speaker",
    },
    {
        name: "Flowy striped skirt",
        price: 49,
        image: "/images/product2.jpg",
        status: "available",
        category: "Monitor",
    },
    {
        name: "Cotton T-Shirt",
        price: 59,
        image: "/images/product3.jpg",
        status: "out-of-stock",
        category: "Gaming",
    },
    {
        name: "Slim striped pocket shirt",
        price: 59,
        image: "/images/product4.jpg",
        status: "available",
        category: "Accessories",
    },
    {
        name: "Yellow striped shirt",
        price: 45,
        image: "/images/product5.jpg",
        status: "available",
        tag: "SALE",
        category: "Keyboard",
    },
];

const categories = [
    "All",
    "Headphone/Speaker",
    "Monitor",
    "Gaming",
    "Accessories",
    "Keyboard",
];

export default function NewProducts() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <section className="product spad">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center mb-6">
                    <div className="w-full md:w-1/3">
                        <div className="section-title">
                            <h4>New product</h4>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <ul className=" flex flex-wrap gap-4 lg:justify-end">
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`cursor-pointer transition font-medium text-xs md:text-sm
                                        ${activeCategory === cat
                                            ? "text-red-600 underline decoration-red-500 underline-offset-4 font-black"
                                            : "text-gray-600 hover:underline hover:decoration-red-500 hover:underline-offset-4"
                                        }`}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Grid with AnimatePresence */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 property__gallery">
                    {/* <!-- Product Item Start --> */}
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.name + activeCategory}
                                className="product__item"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className="product__item__pic set-bg"
                                    style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                >
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li>
                                            <a href="/productDetail" className="">
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
                                    <h6><a href="/productDetail">Headphone</a></h6>
                                    <div className="rating flex justify-center gap-2">
                                        <i className=""><BiStar size={16} /></i>
                                        <i className=""><BiStar size={16} /></i>
                                        <i className=""><BiStar size={16} /></i>
                                        <i className=""><BiStar size={16} /></i>
                                        <i className=""><BiStar size={16} /></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>

    );
} 