import styles from "./Navbar.module.scss";

import Link from "next/link";

export default function Navbar(params) {
  return (
    <nav>
      <div className={styles.navbar_backdrop}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_img}>
            <Link href="/">
              <a>
                <img src={"/logo/MathX.svg"}></img>
              </a>
            </Link>
          </div>

          <div className={styles.navbar_links}>
            <ul>
              <li>
                <Link href="#about">
                  <a>About</a>
                </Link>
              </li>

              <li>
                <Link href="#courses">
                  <a>Courses</a>
                </Link>
              </li>
              <li>
                <Link href="#teachers">
                  <a>Teachers</a>
                </Link>
              </li>
              <li>
                <Link href="#references">
                  <a>References</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>

            <div className={styles.button_container}>
              <form action="/user/login">
                <button>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
