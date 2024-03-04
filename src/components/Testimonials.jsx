import React from "react";
import Testphoto1 from "../assets/testimonial-2.jpg"
import Testphoto2 from "../assets/testimonial-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "./ui/Testimonial"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonials__row">
          <h3 className="testimonials__subtitle">Reviewed by People</h3>
          <h2 className="testimonials__title">Client's Testimonials</h2>
          <p className="testimonials__para">
            Absolute raw testimonaisl provided to us by the customer. Shows the
            quality of our car rental.Our customers have experienced and enjoyed
            our services, and they're eager to share their positive experiences
            with you
          </p>
          <div className="testimonials__list">
            <Testimonial image = {Testphoto1} name = "Larry Hotter" location = "Ravenclaw" ></Testimonial>
            <Testimonial image = {Testphoto2} name = "Jimmy Potter" location = "Slytherin" ></Testimonial>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
