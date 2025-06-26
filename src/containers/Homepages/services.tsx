import { FaCar, FaMoneyBillWave } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services: React.FC = () => {
    return (
        <section className="services ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="">
                        <div className="services__item">
                            <i className="fa fa-car"><FaCar /></i>
                            <h6>Free Shipping</h6>
                            <p>For all oder over $99</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="services__item">
                            <i className="fa fa-money"><FaMoneyBillWave /></i>
                            <h6>Money Back Guarantee</h6>
                            <p>If good have Problems</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="services__item">
                            <i className="fa fa-support"><MdContactSupport /></i>
                            <h6>Online Support 24/7</h6>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="services__item">
                            <i className="fa fa-headphones"><RiSecurePaymentLine /></i>
                            <h6>Payment Secure</h6>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services;