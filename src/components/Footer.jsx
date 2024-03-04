import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <div className="footer__intro footer__content">
            <h4 className="footer__intro__title">Car Rental</h4>
            <p className="footer__intro__para">Go rent a car now! We offer a vast range of vehicles perfectly fit for all of your driving needs. Choose now!</p>
            <div className="footer__intro__links">
                <a href="" className = "footer__intro__link disabled">(123)-456-765</a>
                <a href="" className = "footer__intro__link disabled">rentcar@gmail.com</a>
                <a href="" className = "footer__intro__link disabled">Designed by NotGoogle</a>
            </div>

          </div>
          <div className="footer__company footer__content">
            <h4 className="footer__company__title">
                Company
            </h4>
            <div className="footer__company__links">
                <a href="" className="footer__company__link disabled">San Francisco</a>
                <a href="" className="footer__company__link disabled">Chicago</a>
                <a href="" className="footer__company__link disabled">Mobile</a>
                <a href="" className="footer__company__link disabled">Blog</a>
                <a href="" className="footer__company__link disabled">International</a>
            </div>
          </div>
          <div className="footer__hours footer__content">
            <h4 className="footer__hours__title">Working Hours</h4>
            <span className="footer__hours__time">
                Mon - Fri : 9:00AM - 5:00PM
            </span>
            <span className="footer__hours__time">
                Sat: 9:00AM - 3:00PM
            </span>
            <span className="footer__hours__time">
                Sun : Closed
            </span>
          </div>
          <div className="footer__email footer__content">
            <h4 className="footer__email__title">Subscription</h4>
            <p className="footer__email__para">Submit your Email address for the latest news & updates</p>
            <form action="" className="footer__email__form">
                <input type="text" placeholder = "Enter Email Address" className="footer__email__form__input" />
                <button disabled className="footer__email__form__submit disabled">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
