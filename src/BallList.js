import React from "react";
import Ball from './Ball';

function BallList(props) {
  return (
    <ul>{props.balls.map((ball, index) => <li key={index}><Ball></Ball></li>)}</ul>
  );
}
export default BallList;