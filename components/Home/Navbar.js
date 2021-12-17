import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import { useAuthProvider } from "../../firebase/AuthProvider";

import { useUser } from "../../firebase/useUserNode";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { logout } = useUser();
  const user = useAuthProvider();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [user]);

  console.log(user, "user");

  var mode = props.mode;

  const router = useRouter();

  const clickHandler = (e) => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

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
            {mode == null ? (
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
                  src={
                    user.photoURL ? user.photoURL : "/icons/default_photo.jpg"
                  }
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

                    <p
                      onClick={() => {
                        setIsLoggedIn(false);
                        logout();
                      }}
                      id={styles.logout}
                    >
                      Log Out
                    </p>
                  </div>
                )}
                {isClicked && mode == "admin" && (
                  <div className={styles.profile_modal}>
                    <p
                      onClick={() => router.push("/user/admin")}
                      style={{ borderBottom: "1px solid #000000" }}
                    >
                      Admin Panel
                    </p>

                    <p onClick={() => setIsLoggedIn(false)} id={styles.logout}>
                      Log Out
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.button_container}>
                <p onClick={() => router.push("/user/login")}>
                  <button>Sign In</button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
