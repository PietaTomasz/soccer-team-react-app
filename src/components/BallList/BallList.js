import React from "react";
import Ball from '../Ball/Ball';
import './BallList.css';

const BallList = ({handleOpen, balls, top}) => {
  
  return (
    <div className="balls">
    {balls.map(index => <Ball handleOpen={handleOpen} top={top} key={index} />)}
    </div>
  );
}
export default BallList;
