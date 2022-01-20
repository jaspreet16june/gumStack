import React from 'react';
import "./top.css";
import image from "../image/Rectangle.png"
import image1 from "../image/Vector.png";
import image2 from "../image/Rectangle 69.png";
import Heading from "../component/Heading";
import Circle from "../component/Circle";

const Top = () => {
  return (
    <div className="top">
      <img src={image} alt="" className="image1" />
      <img src={image1} alt="" className="image2" />
      <img src={image2} alt="" className="image3" />
      <img src={image2} alt="" className="image4" />
      <div className="logo">Gumstack</div>
      <div className="details">
        Use Cases
        <div class="dropdown">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            
          >
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="#" className='retail'>Retail</a>
            </li>
            <li>
              <a href="#" className='eCom'>E-Commerce</a>
            </li>
            <li>
              <a href="#" className='SaaS'>SaaS</a>
            </li>
          </ul>
        </div>

        <div className='work'>How it works</div>
        <div className='price'>Pricing</div>
        <div className='signin'>Sign in</div>
      </div>
      <Heading />
      <Circle/>
    </div>
  );
};

export default Top;
