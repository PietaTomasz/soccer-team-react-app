import React from "react";
import './Ball.css';

const Ball = ({handleOpen, top}) => {
  // let top = Math.floor((Math.random() * 100) + 1)+'%';
  let left = Math.floor((Math.random() * 100) + 1)+'%';
  return (
    <div className="ball" onClick={handleOpen} style={{left: left, top: top}}></div>
  )
}
export default Ball;