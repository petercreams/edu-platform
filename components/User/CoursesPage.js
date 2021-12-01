import Navbar from "../Home/Navbar";
import styles from "./CoursesPage.module.scss";
import CardOption from "./CardOption";
import Link from "next/dist/client/link";

import {useState, useEffect} from "react";

export default function AccountPage(params) {

    const [isClicked, setIsClicked] = useState(false);
    const [isLogOut, setIsLogOut] = useState(false);

  return (
    <div className={styles.menu_container}>
      <div className={styles.left_bar}>
        <img src="/teachers/teacher1.jpg" />
        <h1>Piotr Śmietanka</h1>
        
        <Link href="/user/account">
        <a id={styles.account}>My Account</a>
        </Link>
        <Link href="/user/courses">
        <a id={styles.courses}>My Courses</a>
        </Link>
        
        <a id={styles.logout}>Log Out</a>
      </div>
      <div className={styles.right_bar}>
        <h1>My Courses</h1>
        <div className={styles.options_container}>
          {/* <CardOption icon={"/icons/id-card.png"} text={"Change name"}/>
          <CardOption icon={"/icons/password.png"} text={"Change password"}/>
          <CardOption icon={"/icons/email.png"} text={"Change email"}/>
          <CardOption icon={"/icons/photo.png"} text={"Change photo"}/> */}
        </div>
      </div>
    </div>
  );
}
