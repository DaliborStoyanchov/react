import React from "react";

import classes from "./Modal.module.css";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.header}>
          <span onClick={onClose} className={classes.closeModalIcon}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className={classes.body}>
          {body ? (
            body
          ) : (
            <div>
              <p>This is our modal body</p>
            </div>
          )}
        </div>
        <div className={classes.footer}>
          {footer ? (
            footer
          ) : (
            <div>
              <p>This is our footer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
