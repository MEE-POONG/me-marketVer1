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
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-wrap">

                            {/* Sidebar */}
                            <div className="w-full md:w-1/4 px-2">
                                {/* You can continue rendering sidebar__categories, sidebar__filter, etc. */}
                                <div className="shop__sidebar">
                                    <div className="sidebar__categories">
                                        <div className="section-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="categories__accordion">
                                            {/* Replace collapse/accordion logic with React state or HeadlessUI */}
                                            <div className="space-y-2">
                                                {['Women', 'Men', 'Kids', 'Accessories', 'Cosmetic'].map((category, idx) => (
                                                    <div key={idx} className=" rounded">
                                                        <button className="w-full text-left px-4 py-2 font-medium bg-gray-100">
                                                            {category}
                                                        </button>
                                                        <div className="px-4 py-2 text-sm text-gray-700">
                                                            <ul className="space-y-1">
                                                                {['Coats', 'Jackets', 'Dresses', 'Shirts', 'T-shirts', 'Jeans'].map((item, index) => (
                                                                    <li key={index}><a href="#">{item}</a></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="w-full md:w-3/4 px-2">
                                <div className="flex flex-wrap -mx-2">
                                    {[...Array(9)].map((_, index) => (
                                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                                            <div className="product__item">
                                                <div
                                                    className="product__item__pic bg-cover bg-center relative h-64"
                                                    style={{ backgroundImage: `url(/img/shop/shop-${index + 1}.jpg)` }}
                                                >
                                                    {index === 0 && <div className="label new absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs">New</div>}
                                                    <ul className="product__hover absolute bottom-2 right-2 flex space-x-2">
                                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text mt-2">
                                                    <h6><a href="#">Product Name {index + 1}</a></h6>
                                                    <div className="rating text-yellow-400">
                                                        {Array(5).fill(0).map((_, i) => (
                                                            <i key={i} className="fa fa-star"></i>
                                                        ))}
                                                    </div>
                                                    <div className="product__price">$ 59.0</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="w-full text-center">
                                        <div className="pagination__option inline-flex space-x-2 mt-4">
                                            <a href="#" className="px-3 py-1 border rounded">1</a>
                                            <a href="#" className="px-3 py-1 border rounded">2</a>
                                            <a href="#" className="px-3 py-1 border rounded">3</a>
                                            <a href="#" className="px-3 py-1 border rounded"><i className="fa fa-angle-right"></i></a>
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