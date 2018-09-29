import React from "react";

function BallList(props) {
  return (
    <ul>{props.balls.map((ball, index) => <li key={index}>{ball}</li>)}</ul>
  );
}
export default BallList;