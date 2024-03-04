import React from "react";
import Carphoto from "../assets/choose-car.png";
import ChooseFeature from "./ui/ChooseFeature";
import phot1 from "../assets/choose-1.png";
import phot2 from "../assets/choose-2.png";
import phot3 from "../assets/choose-3.png";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="row choose__row">
          <figure className="choose__img__wrapper">
            <img src={Carphoto} alt="" className="choose__img" />
          </figure>
          <div className="choose__content">
            <div className="choose__text">
              <h3 className="choose__text__subtitle">Why Choose Us</h3>
              <h2 className="choose__text__title">
                Best valued deals you will ever find
              </h2>
              <p className="choose__text__para">
                Unlock incredible savings with our unmatched car rental deals.
                We're committed to delivering exceptional value, ensuring you
                enjoy premium services and products at affordable prices. Don't
                miss out on the opportunity to elevate your rental experience
                while saving big.
              </p>
              <Link to="/models">
                <button className="choose__text__btn">Find details</button>
              </Link>
            </div>
            <div className="choose__features">
              <ChooseFeature
                image={phot1}
                title="Cross Country Drive"
                para="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures"
              ></ChooseFeature>
              <ChooseFeature
                image={phot2}
                title="All Inclusive Pricing"
                para="The price written is the price and that's it! We are doing an all inclusive pricing package that you won't regret"
              ></ChooseFeature>
              <ChooseFeature
                image={phot3}
                title="No Hidden Charges"
                para="No more sneaky sneakies, we've got your back budd. Just pay the price written on this increadibly well built website"
              ></ChooseFeature>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
