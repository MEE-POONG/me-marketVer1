import PageLayout from "@/components/Layout"
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ShoppingCart: React.FC = () => {
    return (
        <PageLayout>
            <section className="shop-cart spad mt-10">
                <div className="container mx-auto px-4">
                    <div className="overflow-x-auto">
                        <div className="shop__cart__table">
                            <table className="w-full text-left border-t border-gray-200">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="p-4">Product</th>
                                        <th className="p-4">Price</th>
                                        <th className="p-4">Quantity</th>
                                        <th className="p-4">Total</th>
                                        <th className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="border-b border-gray-100">
                                    <tr>
                                        <td className="flex items-center space-x-4 p-4 cart__product__item">
                                            <img src="images/test01.jpg" alt="" className="w-16 h-16 object-cover" />
                                            <div className="cart__product__item__title">
                                                <h6>Chain bucket bag</h6>
                                                <div className="rating flex justify-center items-center gap-2 ">
                                                    <i className=""><FaStar /></i>
                                                    <i className=""><FaStar /></i>
                                                    <i className=""><FaStar /></i>
                                                    <i className=""><FaStar /></i>
                                                    <i className=""><FaStar /></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__price">$ 150.0</td>
                                        <td className="cart__quantity">
                                            <div className="pro-qty ">
                                                <input type="text" value="1" />
                                            </div>
                                        </td>
                                        <td className="cart__total">$ 300.0</td>
                                        <td className="cart__close ">
                                            <span
                                                className="relative"
                                            >
                                                <IoClose className="absolute top-3 right-3                                                                                                                           " />
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
export default ShoppingCart;