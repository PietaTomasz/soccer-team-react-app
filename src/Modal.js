import React from "react";

const Modal = ({ handleClose, showModal}) => {
  const showHide = showModal ? 'modal block' : 'modal none';
  const url = `https://s3.us-east-2.amazonaws.com/hkn-soccer-2018/180331_WEEK 05 - IBRAHIMOVIC GOAL 77 - LAFC@LA.mp4`;
  return (
    <div className={showHide}>
      <header onClick={handleClose}>Video</header>
      <section>
        <video width="100%" height="100%" controls>
        <source src={url} type="video/mp4" />
        </video>
      </section>
      <footer onClick={handleClose}>Close</footer>
    </div>
  );
};
export default Modal;