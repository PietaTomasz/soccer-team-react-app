import React from "react";
import Ball from './Ball';

const BallList = ({handleOpen, balls}) => {
  
  return (
    <div className="balls">
    {balls.map(index => <Ball handleOpen={handleOpen} key={index} />)}
    </div>
  );
}
export default BallList;
