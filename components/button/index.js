import React from "react";
import styles from "./Button.module.scss"; // Import styles

const Button = ({ children, onClick, variant = "primary" }) => {
  const buttonClass = `${styles.btn} ${styles[`btn-${variant}`] }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
