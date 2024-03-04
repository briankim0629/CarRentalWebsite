import React from "react";
import Googleplay from "../assets/google-play.svg";
import Appstore from "../assets/app-store.svg";
const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row download__row">
          <div className="download__text">
            <h2 className="download__text__title">
              Download our app for instant access
            </h2>
            <p className="download__text__para">
              App is available on all platforms, all application store. You are
              one button away from the amazing services that we provide. Press
              the link below for download
            </p>
            <div className="download__text__links">
              <a href="" className="download__text__link">
                <img
                  src={Googleplay}
                  alt=""
                  className="download__text__link__img"
                />
              </a>
              <a href="" className="download__text__link">
                <img
                  src={Appstore}
                  alt=""
                  className="download__text__link__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
