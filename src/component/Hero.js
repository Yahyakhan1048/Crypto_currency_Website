import React from "react";
import "./Hero.css";
import laptop from "../asset/hero-img.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* LEft side */}
        <div className="left">
          <p>Buy & Sell Crypto 24/7 Using retirement Accout</p>
          <h1>Invest in Cryptocurrency with Your IRS</h1>
          <p>Buy sell, store hundred of Cryptocurrency</p>
          <div className="input-container">
            <input type="email" placeholder="Enter email..." />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={laptop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
