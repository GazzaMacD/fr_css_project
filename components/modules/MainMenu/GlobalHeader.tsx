import Link from "next/link";
import styles from "./MainMenu.module.scss";

function MainMenu(): JSX.Element {
  return (
    <nav className={styles.MainMenu}>
      <ul>
        <li>
          <Link href="/layouts">
            <a>layouts</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>animation</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>clip path</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>100 day challenge</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { MainMenu };
