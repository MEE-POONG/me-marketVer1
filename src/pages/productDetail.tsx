import PageLayout from "@/components/Layout";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";

const ProductDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState('description');
    return (
        <PageLayout>
            <div>
                <section className="product-details spad">
                    <div className="container mx-auto px-4">
                        <div >
                            <div className="grid md:grid-cols-12 gap-4">
                                <div className="md:col-span-6">
                                    <div className="product__details__pic">
                                        <div className="product__details__pic__left product__thumb nice-scroll">
                                            <a className="pt active" href="#product-1">
                                                <img src="/images/test01.jpg" alt="" />
                                            </a>
                                            <a className="pt" href="#product-2">
                                                <img src="/images/test01.jpg" alt="" />
                                            </a>
                                            <a className="pt" href="#product-3">
                                                <img src="/images/test01.jpg" alt="" />
                                            </a>
                                            <a className="pt" href="#product-4">
                                                <img src="/images/test01.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product__details__slider__content">
                                            <div className="product__details__pic__slider owl-carousel">
                                                <img className="product__big__img" src="/images/test01.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-6">
                                    <div className="product__details__text">
                                        <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
                                        <div className="rating flex items-center gap-2">
                                            <i className=""><FaStar /></i>
                                            <i className=""><FaStar /></i>
                                            <i className=""><FaStar /></i>
                                            <i className=""><FaStar /></i>
                                            <i className=""><FaStar /></i>
                                            <span>( 138 reviews )</span>
                                        </div>
                                        <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
                                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                                            magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                                        <div className="product__details__button">
                                            <div className="quantity">
                                                <span>Quantity:</span>
                                                <div className="pro-qty">
                                                    <input type="text" value="1" />
                                                </div>
                                            </div>
                                            <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</a>
                                            <ul>
                                                <li><a href="#"><span className=""><BiHeart /></span></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__details__widget">
                                            <ul>
                                                <li>
                                                    <span>Availability:</span>
                                                    <div className="stock__checkbox">
                                                        <label >
                                                            In Stock
                                                            <input type="checkbox" id="stockin" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Available color:</span>
                                                    <div className="color__checkbox">
                                                        <label >
                                                            <input type="radio" name="color__radio" id="red" checked />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label >
                                                            <input type="radio" name="color__radio" id="black" />
                                                            <span className="checkmark black-bg"></span>
                                                        </label>
                                                        <label >
                                                            <input type="radio" name="color__radio" id="grey" />
                                                            <span className="checkmark grey-bg"></span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Available size:</span>
                                                    <div className="size__btn">
                                                        <label className="">
                                                            <input type="radio" id="xs-btn" />
                                                            xs
                                                        </label>
                                                        <label >
                                                            <input type="radio" id="s-btn" />
                                                            s
                                                        </label>
                                                        <label >
                                                            <input type="radio" id="m-btn" />
                                                            m
                                                        </label>
                                                        <label >
                                                            <input type="radio" id="l-btn" />
                                                            l
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Promotions:</span>
                                                    <p>Free shipping</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Tabs Section */}
                            <div className="w-full mt-20">
                                <div className="border-b border-gray-200">
                                    <nav className="flex justify-center space-x-8" aria-label="Tabs">
                                        <button
                                            onClick={() => setActiveTab('description')}
                                            className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
                                        >
                                            Description
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('specification')}
                                            className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'specification' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
                                        >
                                            Specification
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('reviews')}
                                            className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
                                        >
                                            Reviews (2)
                                        </button>
                                    </nav>
                                </div>
                                <div className="pt-6">
                                    {activeTab === 'description' && (
                                        <div>
                                            <h6 className="text-lg font-semibold mb-2">Description</h6>
                                            <p className="text-gray-600 mb-2">
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                            </p>
                                            <p className="text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                            </p>
                                        </div>
                                    )}
                                    {activeTab === 'specification' && (
                                        <div>
                                            <h6 className="text-lg font-semibold mb-2">Specification</h6>
                                            <p className="text-gray-600 mb-2">
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                            </p>
                                            <p className="text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                            </p>
                                        </div>
                                    )}
                                    {activeTab === 'reviews' && (
                                        <div>
                                            <h6 className="text-lg font-semibold mb-2">Reviews (2)</h6>
                                            <p className="text-gray-600 mb-2">
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                            </p>
                                            <p className="text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* RELATED PRODUCTS */}
                        <div className="mt-20">
                            <div className="text-center">
                                <div className="related__title">
                                    <h5>RELATED PRODUCTS</h5>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
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
                                        <div className="label stockout">out of stock</div>
                                        <ul className="product__hover">
                                            <li><a href="img/product/related/rp-3.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Cotton T-Shirt</a></h6>
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
                </section>
            </div>

        </PageLayout>
    )

}
export default ProductDetail;
