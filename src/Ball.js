import React from "react";

const Ball = ({handleOpen}) => {
  let top = Math.floor((Math.random() * 100) + 1)+'%';
  let left = Math.floor((Math.random() * 100) + 1)+'%';
  return (
    <div className="ball" onClick={handleOpen} style={{left: left, top: top}}></div>
  )
}
export default Ball;