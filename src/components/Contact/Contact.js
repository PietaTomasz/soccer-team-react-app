import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h3>You can contact me by:</h3>
    <div>mail <a href="mailto:tomaszlukaszpieta@gmail.com?Subject=Soccer%20Team%20React%20App" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a></div>
    <div>linkedin <a href="https://www.linkedin.com/in/TomaszPi%C4%99ta/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></div>
    <div>github <a href="https://github.com/TomaszPieta" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
  </div>
)

export default Contact;