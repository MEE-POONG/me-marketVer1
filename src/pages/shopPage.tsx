import PageLayout from "@/components/Layout";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";



export default function Home() {
  return (
    <PageLayout>
      <section className="shop spad">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12">
            <div className="col-span-3">
              <div>
                Filter
              </div>
            </div>
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
    </PageLayout>
  );
}
