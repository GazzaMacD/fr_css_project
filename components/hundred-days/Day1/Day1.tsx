import * as React from "react";
import styles from "./Day1.module.scss";

function Day1() {
  return (
    <div className={styles.Frame}>
      <div className={styles.Center}>
        <div className="number">
          <div className="one-one"></div>
          <div className="one-two"></div>
          <div className="zero-one"></div>
          <div className="zero-two"></div>
        </div>
        <p className="days">Days</p>
        <p className="css">CSS Challenge</p>
      </div>
    </div>
  );
}

export { Day1 };
