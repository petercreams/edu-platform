import styles from "./AdminPage.module.scss";
import CardOption from "../User/CardOption";
import AdminPanel from "./AdminPanel";

import { useState } from "react";

export default function AdminPage(params) {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const adminPage = (
    <div className={styles.right_bar}>
      <h1>Admin Panel</h1>
      <div className={styles.options_container}>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/id-card.png"}
            text={"Show users"}
            link={"/user/admin/users"}
          />
        </div>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/password.png"}
            text={"Edit courses"}
            link={"/user/admin/courses"}
          />
        </div>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/email.png"}
            text={"Show messages"}
            link={"/user/admin/messages"}
          />
        </div>
        <div className={styles.options_item}>
          <CardOption
            icon={"/icons/photo.png"}
            text={"Give permissions"}
            link={"/user/admin/permissions"}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.menu_container}>
      <AdminPanel />
      {adminPage}
    </div>
  );
}
