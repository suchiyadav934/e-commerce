import React from 'react'
import pic from './photo_2024-09-28_16-15-08.jpg'

const Footer = () => {
  return (
    <div>
      
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    {/* <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div> */}
    {/* Left */}
    {/* Right */}
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" /><img src={pic} alt='hfg' style={{width:"200px" , height:"70px"}}/>
          </h6>
          <p>
          Ecommerce is the electronic buying and selling of goods and services, usually via the internet. Businesses can build their own ecommerce website.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products Categories
          </h6>
          <p>
            <a href="#!" className="text-reset">Latest Arrivals</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Best Sellers
</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Featured Products</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Sale/Discounts</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
          Customer Service
          </h6>
          <p>
            <a href="#!" className="text-reset">Contact Us
</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Shipping & Delivery
</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Return Policy</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Track Your Order</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> LUCKNOW, UP</p>
          <p>
            <i className="fas fa-envelope me-3" />
            suchi123@gmail.com
          </p>
          <p><i className="fas  me-3" /> + 91 63885465241</p>
          <p><i className="fas fa-print me-3" /> + 91 6352414512</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
 
    <p class="text-center mb-2 mb-sm-0">Copyright © 2024 | E-commerce site. All
    Rights Reserved.</p>
  </div>
  {/* Copyright */}
</footer>


    </div>
  )
}

export default Footer
