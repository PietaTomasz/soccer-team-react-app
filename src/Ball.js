import React from "react";

const Ball = (props, openModal) => {
  return (
    <div className="ball"  style={{width: '6vw', position: 'relative', top: '30px', left: '50px', zIndex: '6'}} onClick={props.openModal}></div>
  )
}
export default Ball;