import React from "react";
import "../component/circle.css";
import ellipse from "../image/Ellipse 315 (1).png";
import img1 from "../image/Ellipse 316.png";
import img2 from "../image/Ellipse 317 (1).png";
import img3 from "../image/VectorState.png";


const Circle = () => {
  return (
    <div className="circle">
      <img src={ellipse} alt="side" />
      <div className="inside">
        <img src={img1} alt="side" className="side1" />
        <div className="line"></div>
        <div className="player">
        </div>
        <img src={img3} alt="" className="icon"  />g
        <img src={img2} alt="side" className="side2" />
      </div>
    </div>
  );
};

export default Circle;
