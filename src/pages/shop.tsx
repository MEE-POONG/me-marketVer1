import PageLayout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdKeyboardArrowUp, MdOutlineArrowDropDown } from "react-icons/md";

const categories = {
    "สินค้าไอที": ["Laptop", "Smartphones", "Accessories"],
    "สินค้าแฟชั่น": ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"],
    "สินค้าเครื่องสำอาง": ["Skincare", "Makeup", "Fragrance"],
};

const priceRanges = [
    "ต่ำกว่า 500 บาท",
    "500 - 1,000 บาท",
    "1,000 - 2,000 บาท",
    "มากกว่า 2,000 บาท",
];


export default function ShopPage() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory((prev) => (prev === category ? null : category));
    };

    const [minPrice, setMinPrice] = useState(33);
    const [maxPrice, setMaxPrice] = useState(99);

    return (
        <PageLayout>
            <div className="container mx-auto">
                {/* breadcrumb */}
                <div className="breadcrumb-option">
                    <div className="flex">
                        <div className="w-full">
                            <div className="flex items-center gap-2">
                                <Link href={'/'} className="flex item-center gap-2">
                                    <FaHome size={18} />
                                    Home
                                </Link>
                                <span className="text-gray-600">/ shop</span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="shop spad">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-12 gap-5">
                            {/* Filter */}
                            <div className="col-span-3">
                                <div>
                                    <a href="" className="font-bold">ALL</a>
                                    <div className="max-w-sm mx-auto space-y-1 mt-3">
                                        <p>หมวดหมู่</p>
                                        {Object.entries(categories).map(([categoryName, items]) => (
                                            <div
                                                key={categoryName}
                                                className=""
                                            >
                                                {/* Header */}
                                                <div
                                                    className="flex items-center justify-between cursor-pointer"
                                                    onClick={() => toggleCategory(categoryName)}
                                                >
                                                    <span className="font-medium text-gray-800">{categoryName}</span>
                                                    {openCategory === categoryName ? <MdKeyboardArrowUp /> : <MdOutlineArrowDropDown />}
                                                </div>

                                                {/* Slide Content */}
                                                <div
                                                    className={`transition-all overflow-hidden duration-300 text-gray-700 inset-shadow-xs  ${openCategory === categoryName ? "max-h-96 mt-2 p-1 bg-gray-100" : "max-h-0 "
                                                        }`}
                                                >
                                                    <ul className="text-sm space-y-1 ">
                                                        {items.map((item, idx) => (
                                                            <li key={idx}>- <Link href=''>{item}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="max-w-sm mx-auto mt-5">
                                        {/* Title */}
                                        <h6 className="text-lg font-bold text-black mb-2 border-b-2 border-red-600 w-max pb-1">
                                            SHOP BY PRICE
                                        </h6>

                                        {/* Slider Range (simulate double slider with two inputs) */}
                                        <div className="flex flex-col space-y-1">
                                            <div className="relative">
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={200}
                                                    value={minPrice}
                                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                                    className="w-full accent-red-600"
                                                />
                                                <input
                                                    type="range"
                                                    min={0}
                                                    max={50000}
                                                    value={maxPrice}
                                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                                    className="w-full mt-1 accent-red-600"
                                                />
                                            </div>

                                            {/* Price Display */}
                                            <div className="flex items-center justify-between text-sm text-gray-700">
                                                <span>Price: ${minPrice} - ${maxPrice}</span>
                                                <button className="px-4 py-1 border border-red-600 text-red-600 font-bold text-sm rounded hover:bg-red-600 hover:text-white transition">
                                                    FILTER
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>




                            {/* Product */}
                            <div className="col-span-9">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" style={{ backgroundImage: "url(/images/test01.jpg)" }}>
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li><a href="/productDetail" className=""><span className=""><FaRegEye /></span></a></li>
                                                <li><a href="#"><span className=""><FaRegHeart /></span></a></li>
                                                <li><a href="#"><span className=""><LiaShoppingBagSolid /></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text ">
                                            <h6><a href="#">Buttons tweed blazer</a></h6>
                                            <div className="rating flex justify-center items-center gap-2 ">
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" style={{ backgroundImage: "url(/images/test01.jpg)" }}>
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li><a href="/productDetail" className=""><span className=""><FaRegEye /></span></a></li>
                                                <li><a href="#"><span className=""><FaRegHeart /></span></a></li>
                                                <li><a href="#"><span className=""><LiaShoppingBagSolid /></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text ">
                                            <h6><a href="#">Buttons tweed blazer</a></h6>
                                            <div className="rating flex justify-center items-center gap-2 ">
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" style={{ backgroundImage: "url(/images/test01.jpg)" }}>
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li><a href="/" className=""><span className=""><FaRegEye /></span></a></li>
                                                <li><a href="#"><span className=""><FaRegHeart /></span></a></li>
                                                <li><a href="#"><span className=""><LiaShoppingBagSolid /></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text ">
                                            <h6><a href="#">Buttons tweed blazer</a></h6>
                                            <div className="rating flex justify-center items-center gap-2 ">
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" style={{ backgroundImage: "url(/images/test01.jpg)" }}>
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li><a href="/" className=""><span className=""><FaRegEye /></span></a></li>
                                                <li><a href="#"><span className=""><FaRegHeart /></span></a></li>
                                                <li><a href="#"><span className=""><LiaShoppingBagSolid /></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text ">
                                            <h6><a href="#">Buttons tweed blazer</a></h6>
                                            <div className="rating flex justify-center items-center gap-2 ">
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                                <i className=""><FaStar /></i>
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}