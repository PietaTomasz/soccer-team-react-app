import React from "react";
import Ball from '../Ball/Ball';
import './BallList.css';

const BallList = ({handleOpen, balls}) => {
  
  return (
    <div className="balls">
    {balls.map(ball => <Ball handleOpen={handleOpen} ball={ball} key={ball.key} />)}
    </div>
  );
}
export default BallList;
