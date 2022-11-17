import * as React from "react";
import { SlHome } from "react-icons/sl";
import Link from "next/link";
import styles from "./HomeLink.module.scss";

function HomeLink() {
  return (
    <div className={styles.HomeLink}>
      <Link href="/">
        <a>
          <SlHome />
        </a>
      </Link>
    </div>
  );
}

export { HomeLink };
