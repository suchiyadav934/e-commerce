import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="">
      <div >
        <div className="newForm">
          <div className="container  main">
          <h1 className="text-center">Conatct Form</h1>
            <div className="row mb-4 fm">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    First name
                  </label>
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example2">
                    Last name
                  </label>
                </div>
              </div>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="form3Example4"
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue
                id="form2Example33"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary btn-block mb-4 b"
            >
              Sign up
            </button>
            <div className="text-center">
              <p>or sign up with:</p>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
               <FaFacebook/>
              </button>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                < FaGoogle/>
              </button>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <FaSquareXTwitter />
              </button>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </div>

        <section>
          <div className="container mt-5">
            <h2 className="mb-2 text-center">Different Effective Products </h2>
            <div className="row mt-5">
              <div className="col-lg-6">
                <img
                  className="si"
                  src="https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png"
                  height="95%"
                  width="100%"
                />
              </div>
              <div className="col-lg-6 mt-4" style={{ textAlign: "justify" }}>
                <p className="bg-text">
                  Don't miss out on our exclusive product sale! For a limited
                  time only, enjoy unbeatable discounts on our top-selling
                  items. Whether you're looking for the latest gadgets, stylish
                  apparel, or must-have home essentials, now is the perfect
                  opportunity to grab your favorites at incredible prices.{" "}
                  <br />
                  <br /> Hurry, as stock is limited and these deals won't last
                  long! Shop today and elevate your experience with our
                  high-quality products at amazing savings. Visit our website to
                  explore the full range and take advantage of this fantastic
                  offer!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <h2 className="mb-2 text-center">Different Types Products Nmae</h2>
            <div className="row">
              <div className="col-md-12"></div>
            </div>
            <div className="row  mt-3">
              <div className="col-lg-4 ">
                <div className="pborder1" style={{ height: 270 }}>
                  <h3 className="tith3">Beaty Products </h3>
                  <p className="pb-3">
                    Unlock your natural glow with our luxurious beauty product,
                    specially formulated to enhance your radiance and rejuvenate
                    your skin. Infused with nourishing ingredients.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="pborder1">
                  <h3 className="tith3">Elecronic Products </h3>
                  <p className="pb-3">
                    Elevate your tech experience with our latest electronic
                    product, designed to seamlessly blend innovation and
                    functionality. Packed with cutting-edge features.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="pborder1" style={{ height: 270 }}>
                  <h3 className="tith3">Furniture Products</h3>
                  <p className="pb-3">
                    Transform your living space with our stunning furniture
                    collection, where style meets comfort. Each piece is
                    thoughtfully designed to enhance your home’s aesthetic while
                    providing ultimate functionality.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="pborder1" style={{ height: 270 }}>
                  <h3 className="tith3">Cloths Products</h3>
                  <p className="pb-3">
                    Revamp your wardrobe with our latest clothing collection,
                    where fashion meets comfort. Each piece is crafted from
                    high-quality fabrics designed to provide a perfect fit and
                    lasting style. 
                  </p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="pborder1" style={{ height: 270 }}>
                  <h3 className="tith3">Vegitable Products</h3>
                  <p className="pb-3">
                    Experience the vibrant flavors and exceptional freshness of
                    our farm-fresh vegetables! Packed with essential nutrients
                    and bursting with natural goodness, our selection offers
                    everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
