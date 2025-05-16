import PageLayout from "@/components/Layout";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { FaHome } from "react-icons/fa";


export default function ShopPage() {
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
                    <div>
                        <div className="w-full md:w-1/4 px-2">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="space-y-2" id="accordionExample">
                                            {/* Repeat card */}
                                            <div className="border rounded">
                                                <button className="w-full text-left px-4 py-2 font-medium bg-gray-100">
                                                    Women
                                                </button>
                                                <div className="px-4 py-2 text-sm text-gray-700">
                                                    <ul className="space-y-1">
                                                        <li><a href="#">Coats</a></li>
                                                        <li><a href="#">Jackets</a></li>
                                                        <li><a href="#">Dresses</a></li>
                                                        <li><a href="#">Shirts</a></li>
                                                        <li><a href="#">T-shirts</a></li>
                                                        <li><a href="#">Jeans</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Copy the above block for Men, Kids, Accessories, Cosmetic */}
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar__filter mt-6">
                                    <div className="section-title">
                                        <h4>Shop by price</h4>
                                    </div>
                                    <div className="filter-range-wrap">
                                        <div className="price-range bg-gray-200 h-2 rounded my-4"></div>
                                        <div className="range-slider">
                                            <div className="price-input flex items-center gap-2">
                                                <p className="mr-2">Price:</p>
                                                <input type="text" id="minamount" className="w-16 border px-1 py-0.5 text-sm" />
                                                <input type="text" id="maxamount" className="w-16 border px-1 py-0.5 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="inline-block mt-2 text-blue-500 hover:underline">Filter</a>
                                </div>

                                <div className="sidebar__sizes mt-6">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list flex flex-wrap gap-4">
                                        {["xxs", "xs", "xss", "s", "m", "ml", "l", "xl"].map(size => (
                                            <label key={size} className="flex items-center space-x-2">
                                                <span className="capitalize">{size}</span>
                                                <input type="checkbox" id={size} className="form-checkbox" />
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="sidebar__color mt-6">
                                    <div className="section-title">
                                        <h4>Shop by color</h4>
                                    </div>
                                    <div className="size__list color__list flex flex-wrap gap-4">
                                        {["black", "whites", "reds", "greys", "blues", "beige", "greens", "yellows"].map(color => (
                                            <label key={color} className="flex items-center space-x-2">
                                                <span className="capitalize">{color.replace(/s$/, '')}</span>
                                                <input type="checkbox" id={color} className="form-checkbox" />
                                            </label>
                                        ))}
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