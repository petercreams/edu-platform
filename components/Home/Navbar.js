import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  var mode = props.mode;

  const router = useRouter();

  const clickHandler = (e) => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  // useEffect(() => {
  //   console.log(isClicked);
  //   if (isClicked) {
  //     setTimeout(() => {
  //       setIsClicked(false);
  //       console.log(isClicked);
  //     }, [5000]);
  //   }
  // }, [isClicked]);

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
            {mode !== "account" ? (
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
            ) : null}

            {isLoggedIn ? (
              <div className={styles.profile_container}>
                {/* {should be taken from server} */}
                <img
                  onClick={clickHandler}
                  id={styles.profile_img}
                  src="/users/user.jpg"
                />
                <img
                  onClick={clickHandler}
                  id={styles.more}
                  src="/icons/more.svg"
                />

                {isClicked && (
                  <div className={styles.profile_modal}>
                    <p
                      onClick={() => router.push("/user/account")}
                      style={{ borderBottom: "1px solid #000000" }}
                    >
                      My account
                    </p>
                    <p
                      onClick={() => router.push("/user/courses")}
                      style={{ borderBottom: "1px solid #000000" }}
                    >
                      My courses
                    </p>

                    <p onClick={() => setIsLoggedIn(false)} id={styles.logout}>Log Out</p>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.button_container}>
                {/* <Link href="/user/login"> */}
                  <p onClick={() => router.push("/user/login")}>
                    <button>Sign In</button>
                  </p>
                {/* </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
