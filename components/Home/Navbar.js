import styles from "./Navbar.module.scss";

import Link from "next/link";

export default function Navbar(params) {
  return (
    <nav>
      <div className={styles.navbar_backdrop}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_img}>
            <a href="/">
              <img src={"/logo/MathX.svg"}></img>
            </a>
          </div>
          <div className={styles.navbar_links}>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>Teachers</a>
              </li>
              <li>
                <a>References</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>

            <div className={styles.button_container}>
            <button>Sign In</button>
          </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
