import React from "react";
import './Ball.css';

const Ball = ({handleOpen, ball: { dataX, dataY, videoUrl }}) => (
  <div className="ball" onClick={() => handleOpen(videoUrl)}
  style={{left: `${dataX}%`, top: `${dataY}%`}} />
);

export default Ball;