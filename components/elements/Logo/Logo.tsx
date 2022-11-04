import Link from "next/link";
import * as React from "react";
import styles from "./Logo.module.scss";

function Logo(): JSX.Element {
  return (
    <div className={styles.Logo}>
      <Link href="/">
        <a>Learn CSS</a>
      </Link>
    </div>
  );
}

export { Logo };
