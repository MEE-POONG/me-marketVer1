import PageLayout from "@/components/Layout";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const BlogDetail: React.FC = () => {
    return (
        <PageLayout>
            <div className=" ">
                <section className="blog-details spad mt-10">
                    <div className="container mx-auto mx-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 px-4">
                                <div className="blog__details__content">
                                    <div className="blog__details__item">
                                        <img src="images/test01.jpg" alt="" className="mb-4" />
                                        <div className="blog__details__item__title">
                                            <span className="tip">Street style</span>
                                            <h4 className="text-2xl font-semibold">Being seen: how is age diversity effecting change in fashion and beauty?</h4>
                                            <ul className="flex space-x-6 text-sm text-gray-600 mt-2">
                                                <li>by <span className="text-black">Ema Timahe</span></li>
                                                <li>Seb 17, 2019</li>
                                                <li>39 Comments</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__details__desc space-y-4 mt-4">
                                        <p>Afashion season can be defined as much by the people on the catwalk...</p>
                                        <p>A few days later, Simone Rocha arguably upped the ante...</p>
                                    </div>
                                    <div className="blog__details__quote bg-gray-100 p-4 my-6 relative">
                                        <div className="icon absolute -top-2 left-2 text-4xl text-gray-400">
                                            <i className=""><FaQuoteLeft /></i>
                                        </div>
                                        <p className="ml-10 text-gray-700">
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...
                                        </p>
                                    </div>
                                    <div className="blog__details__desc space-y-4">
                                        <p>Occaecat cupidatat non proident, sunt in culpa qui officia deserunt...</p>
                                    </div>
                                    <div className="blog__details__tags mt-6 space-x-2">
                                        {['Fashion', 'Street style', 'Diversity', 'Beauty'].map((tag) => (
                                            <a key={tag} href="#" className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</a>
                                        ))}
                                    </div>
                                    <div className="blog__details__btns mt-10">
                                        <div className="flex flex-wrap -mx-2">
                                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                                <div className="blog__details__btn__item">
                                                    <h6><a href="#" className="text-blue-600"><i className=""><MdOutlineKeyboardArrowLeft /></i> Previous posts</a></h6>
                                                </div>
                                            </div>
                                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                                <div className="blog__details__btn__item blog__details__btn__item--next text-right">
                                                    <h6><a href="#" className="text-blue-600">Next posts <i className=""><MdOutlineKeyboardArrowRight /></i></a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__details__comment mt-10">
                                        <h5 className="text-xl font-semibold mb-4">3 Comment</h5>
                                        <a href="#" className="leave-btn text-blue-500 mb-4 inline-block">Leave a comment</a>
                                        {[1, 2, 3].map((index) => (
                                            <div key={index} className={`blog__comment__item ${index === 2 ? 'blog__comment__item--reply' : ''} mb-6 flex`}>
                                                <div className="blog__comment__item__pic mr-4 w-16 h-16">
                                                    <img src={`img/blog/details/comment-${index}.jpg`} alt="" className="rounded-full" />
                                                </div>
                                                <div className="blog__comment__item__text">
                                                    <h6>Brandon Kelley</h6>
                                                    <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet...</p>
                                                    <ul className="flex space-x-4 text-xs text-gray-500 mt-2">
                                                        <li><i className="fa fa-clock-o"></i> Seb 17, 2019</li>
                                                        <li><i className="fa fa-heart-o"></i> 12</li>
                                                        <li><i className="fa fa-share"></i> 1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-4">
                                <div className="blog__sidebar">
                                    <div className="blog__sidebar__item mb-8">
                                        <div className="section-title mb-4">
                                            <h4 className="text-lg font-semibold">Categories</h4>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li><a href="#">All <span>(250)</span></a></li>
                                            <li><a href="#">Fashion week <span>(80)</span></a></li>
                                            <li><a href="#">Street style <span>(75)</span></a></li>
                                            <li><a href="#">Lifestyle <span>(35)</span></a></li>
                                            <li><a href="#">Beauty <span>(60)</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="blog__sidebar__item mb-8">
                                        <div className="section-title mb-4">
                                            <h4 className="text-lg font-semibold">Feature posts</h4>
                                        </div>
                                        {[1, 2, 3].map((num) => (
                                            <a key={num} href="#" className="flex items-center mb-4 blog__feature__item">
                                                <div className="blog__feature__item__pic w-20 h-20 mr-4">
                                                    <img src={`img/blog/sidebar/fp-${num}.jpg`} alt="" className="object-cover w-full h-full" />
                                                </div>
                                                <div className="blog__feature__item__text">
                                                    <h6 className="text-sm font-medium leading-snug">Amf Cannes Red Carpet Celebrities Kend...</h6>
                                                    <span className="text-xs text-gray-500">Seb 17, 2019</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <div className="section-title mb-4">
                                            <h4 className="text-lg font-semibold">Tags cloud</h4>
                                        </div>
                                        <div className="blog__sidebar__tags flex flex-wrap gap-2">
                                            {['Fashion', 'Street style', 'Diversity', 'Beauty'].map((tag) => (
                                                <a key={tag} href="#" className="bg-gray-200 text-sm px-3 py-1 rounded-full">{tag}</a>
                                            ))}
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
export default BlogDetail;
