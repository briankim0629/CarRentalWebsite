import React from "react";
import Feature from "./ui/Feature";
import Feature1 from "../assets/feature-1.png";
import Feature2 from "../assets/feature-2.png";
import Feature3 from "../assets/feature-3.png";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row features__row">
          <h3 className="features__subtitle">Book your car now</h3>
          <h2 className="features__title">Quick and easy car rental</h2>
          <div className="features__list">
            <Feature
              image={Feature1}
              title="Select Car"
              paragraph="We offer multiple variety of cars for all your driving needs. We have the perfect car to meet your needs"
            />
            <Feature
              image={Feature2}
              title="Contact Operator"
              paragraph="With any inquery, please contact our Operators. Our operators
              are always ready to support."
            />
            <Feature
              image={Feature3}
              title="Let's Drive"
              paragraph="Speed. Wind. Vroom Vroom is all we live for at the end of the
              day. We've got you overed with our cars"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
