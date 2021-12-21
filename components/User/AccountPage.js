import styles from "./AccountPage.module.scss";
import CardOption from "./CardOption";

import { useState } from "react";
import UserPanel from "./UserPanel";

export default function AccountPage(params) {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const accountPanel = (
    <div className={styles.right_bar}>
      <h1>My Account</h1>
      <div className={styles.options_container}>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/id-card.png"}
            text={"Change name"}
            link={"/user/account/edit/name"}
          />
        </div>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/password.png"}
            text={"Change password"}
            link={"/user/account/edit/password"}
          />
        </div>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/email.png"}
            text={"Change email"}
            link={"/user/account/edit/email"}
          />
        </div>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/photo.png"}
            text={"Change photo"}
            link={"/user/account/edit/photo"}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.menu_container}>
      <UserPanel />
      {accountPanel}
    </div>
  );
}
