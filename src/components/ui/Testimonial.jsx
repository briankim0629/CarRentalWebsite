import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const Testimonial = ({ image, name, location }) => {
  return (
    <div className="testimonial">
      <p className="testimonial__review">
        "We Rented a car from this website and it was the best! The booking was
        easy thanks to the amazing website they have built"
      </p>
      <div className="testimonial__info">
        <figure className="testimonial__info__img__wrapper">
          <img src={image} alt="" className="testimonial__info__img" />
        </figure>
        <div className="testimonial__info__profile">
          <h4 className="testimonial__info__name">{name}</h4>
          <h5 className="testimonial__info__location">{location}</h5>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="testimonial__info__icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
