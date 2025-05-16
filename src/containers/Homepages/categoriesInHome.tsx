import React from "react"

const CategoriesInHome: React.FC = () => {
    return (
        <section className="categories">
            <div className="w-full px-0">
                <div className="flex flex-wrap">
                    {/* Large Left Category */}
                    <div className="w-full lg:w-1/2 p-0">
                        <div
                            className="categories__item categories__large__item set-bg"
                            data-setbg="img/categories/category-1.jpg"
                        >
                            <div className="categories__text">
                                <h1>Women’s fashion</h1>
                                <p>
                                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt
                                    labore edolore magna aliquapendisse ultrices gravida.
                                </p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>

                    {/* Right 4 Items */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 p-0">
                                <div
                                    className="categories__item set-bg"
                                    data-setbg="img/categories/category-2.jpg"
                                >
                                    <div className="categories__text">
                                        <h4>Men’s fashion</h4>
                                        <p>358 items</p>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 p-0">
                                <div
                                    className="categories__item set-bg"
                                    data-setbg="img/categories/category-3.jpg"
                                >
                                    <div className="categories__text">
                                        <h4>Kid’s fashion</h4>
                                        <p>273 items</p>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 p-0">
                                <div
                                    className="categories__item set-bg"
                                    data-setbg="img/categories/category-4.jpg"
                                >
                                    <div className="categories__text">
                                        <h4>Cosmetics</h4>
                                        <p>159 items</p>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 p-0">
                                <div
                                    className="categories__item set-bg"
                                    data-setbg="img/categories/category-5.jpg"
                                >
                                    <div className="categories__text">
                                        <h4>Accessories</h4>
                                        <p>792 items</p>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}
export default CategoriesInHome;
