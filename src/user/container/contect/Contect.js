import React from 'react';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';

function Contect(props) {

    let contectSchema = object({
  
        email: string().email().required(),

        message: string().required().min(10),

    });

    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validationSchema: contectSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;
    return (
        <div>
            {/* Cart */}
            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full js-hide-cart" />
                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Your Cart
                        </span>
                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close" />
                        </div>
                    </div>
                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-01.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        White Shirt Pleat
                                    </a>
                                    <span className="header-cart-item-info">
                                        1 x $19.00
                                    </span>
                                </div>
                            </li>
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-02.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Converse All Star
                                    </a>
                                    <span className="header-cart-item-info">
                                        1 x $39.00
                                    </span>
                                </div>
                            </li>
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-03.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Nixon Porter Leather
                                    </a>
                                    <span className="header-cart-item-info">
                                        1 x $17.00
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                Total: $75.00
                            </div>
                            <div className="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Title page */}
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                <h2 className="ltext-105 cl0 txt-center">
                    Contact
                </h2>
            </section>
            {/* Content page */}
            <section className="bg0 p-t-104 p-b-116">
                <div className="container">
                    <div className="flex-w flex-tr">
                        <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                            <form onSubmit={handleSubmit}>
                                <h4 className="mtext-105 cl2 txt-center p-b-30">
                                    Send Us A Message
                                </h4>
                                <div className="bor8 m-b-20 how-pos4-parent">
                                    <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                                     type="text"
                                      name="email"
                                       placeholder="Your Email Address"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}
                                        />
                                    <img className="how-pos4 pointer-none" src="images/icons/icon-email.png" alt="ICON" />
                                </div>
                                <span style={{ color: "red", marginTop: "-10px" }}>
                                        {touched.email && errors.email ? errors.email : ''}
                                    </span>
                                <div className="bor8 m-b-30">
                                    <textarea
                                     className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                                      name="message"
                                       placeholder="How Can We Help?"
                                        defaultValue={""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                         />
                                </div>
                                <span style={{ color: "red", marginTop: "-10px" }}>
                                        {touched.message && errors.message ? errors.message : ''}
                                    </span>
                                <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                            <div className="flex-w w-full p-b-42">
                                <span className="fs-18 cl5 txt-center size-211">
                                    <span className="lnr lnr-map-marker" />
                                </span>
                                <div className="size-212 p-t-2">
                                    <span className="mtext-110 cl2">
                                        Address
                                    </span>
                                    <p className="stext-115 cl6 size-213 p-t-18">
                                        Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
                                    </p>
                                </div>
                            </div>
                            <div className="flex-w w-full p-b-42">
                                <span className="fs-18 cl5 txt-center size-211">
                                    <span className="lnr lnr-phone-handset" />
                                </span>
                                <div className="size-212 p-t-2">
                                    <span className="mtext-110 cl2">
                                        Lets Talk
                                    </span>
                                    <p className="stext-115 cl1 size-213 p-t-18">
                                        +1 800 1236879
                                    </p>
                                </div>
                            </div>
                            <div className="flex-w w-full">
                                <span className="fs-18 cl5 txt-center size-211">
                                    <span className="lnr lnr-envelope" />
                                </span>
                                <div className="size-212 p-t-2">
                                    <span className="mtext-110 cl2">
                                        Sale Support
                                    </span>
                                    <p className="stext-115 cl1 size-213 p-t-18">
                                        contact@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map */}
            <div className="map">
                <div className="size-303" id="google_map" data-map-x="40.691446" data-map-y="-73.886787" data-pin="images/icons/pin.png" data-scrollwhell={0} data-draggable={1} data-zoom={11} />
            </div>
        </div>
    );
}

export default Contect;