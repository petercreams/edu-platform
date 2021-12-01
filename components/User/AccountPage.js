import Navbar from "../Home/Navbar";
import styles from "./AccountPage.module.scss";
import CardOption from "./CardOption";
import Link from "next/dist/client/link";

import {useState, useEffect} from "react";
import UserPanel from "./UserPanel";

export default function AccountPage(params) {

    const [isClicked, setIsClicked] = useState(false);
    const [isMyAccount, setIsMyAccount] = useState(true);
    const [isMyCourses, setisMyCourses] = useState(false);
    const [isLogOut, setIsLogOut] = useState(false);

  return (
    <div className={styles.menu_container}>
      <UserPanel />
      <div className={styles.right_bar}>
        <h1>My Account</h1>
        <div className={styles.options_container}>
          <CardOption icon={"/icons/id-card.png"} text={"Change name"} link={"/user/account/edit/name"}/>
          <CardOption icon={"/icons/password.png"} text={"Change password"} link={"/user/account/edit/password"}/>
          <CardOption icon={"/icons/email.png"} text={"Change email"} link={"/user/account/edit/email"}/>
          <CardOption icon={"/icons/photo.png"} text={"Change photo"} link={"/user/account/edit/photo"}/>
        </div>
      </div>
    </div>
  );
}
