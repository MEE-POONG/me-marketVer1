import React from "react";
import { FaFacebook } from 'react-icons/fa';

const PageFooter: React.FC = () => {
    return (
        <footer className="footer">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* ABOUT */}
                    <div className="w-full sm:w-1/2 md:w-5/12 lg:w-1/3 px-4 mb-8">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <a href="/">
                                    <img src="images/logo1.png" className="w-[100px]" alt="Logo" />
                                </a>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt cilisis.
                            </p>
                            <div className="footer__payment flex gap-2 mt-4">
                                <img src="images/logo1.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8">
                        <div className="footer__widget">
                            <h6>Quick links</h6>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* ACCOUNT */}
                    <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8">
                        <div className="footer__widget">
                            <h6>Account</h6>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Orders Tracking</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="w-full md:w-2/3 lg:w-1/3 px-4 mb-8">
                        <div className="footer__newslatter">
                            <h6>NEWSLETTER</h6>
                            <form action="#" className="flex flex-wrap gap-2 mt-2">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none"
                                />
                                <button type="submit" className="site-btn">
                                    Subscribe
                                </button>
                            </form>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black hover:bg-blue-600" >
                                    <FaFacebook />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="footer__copyright__text text-center text-sm text-gray-500 mt-8">
                            <p>
                                &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
                                <i className="fa fa-heart text-red-500" aria-hidden="true"></i> by{" "}
                                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                    Colorlib
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PageFooter;
