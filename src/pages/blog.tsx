import PageLayout from "@/components/Layout";


export default function BlogPage() {
    return (
        <PageLayout>
            <div className="container mx-auto px-4">
                <section className="blog spad">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* <!-- Blog Item --> */}
                            <div className="flex flex-col gap-6">
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic large__item"
                                        style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="/blogDetail">No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                       style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Pot Party! See Farrah Abraham Flaunt Smoking Body At...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                        style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">CMT Awards 2019 Red Carpet Arrivals Carrie Underwood, Sheryl...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Blog Column 2 --> */}
                            <div className="flex flex-col gap-6">
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                       style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                        style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At Stagecoach...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                        style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                        style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Blog Column 3 --> */}
                            <div className="flex flex-col gap-6">
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                       style={{ backgroundImage: "url(/images/test01.jpg)" }}
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2019...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic"
                                        // style="background-image: url('/img/blog/blog-5.jpg'); background-size: cover; background-position: center; height: 200px;"
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Billboard Music Awards: Best, Worst & Wackiest Dresses On The...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__item">
                                    <div
                                        className="blog__item__pic large__item"
                                        // style="background-image: url('/img/blog/blog-6.jpg'); background-size: cover; background-position: center; height: 240px;"
                                    ></div>
                                    <div className="blog__item__text">
                                        <h6><a href="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</a></h6>
                                        <ul>
                                            <li>by <span>Ema Timahe</span></li>
                                            <li>Seb 17, 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Load More Button --> */}
                        <div className="text-center mt-8">
                            <a href="#" className="primary-btn load-btn inline-block bg-black text-white px-6 py-3 rounded">
                                Load more posts
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </PageLayout>
    );
}
