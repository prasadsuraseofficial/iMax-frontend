import React from "react";
import { Button } from "reactstrap";
import styles from "./index.module.css";

const CustomButton = ({ btnText }) => {
  return <Button className={styles.submitBtn}>{btnText}</Button>;
};

export default CustomButton;
