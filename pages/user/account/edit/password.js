import styles from "../../../../styles/user/edit/email.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";

export default function ChangePassword(params) {
  const currentPassword = useRef();
  const newPassword = useRef();
  const confirmNewPassword = useRef();

  const sendForm = (e) => {
    e.preventDefault();

    const formData = {
      currentPassword: currentPassword.current.value,
      newPassword: newPassword.current.value,
      confirmNewPassword: confirmNewPassword.current.value,
    };

    console.log("Form sent");

    console.log(formData);
  };

  return (
    <div className={styles.account_container}>
      <Navbar mode={"account"} />
      <div className={styles.menu_container}>
        <UserPanel option="account" />
        <div className={styles.right_bar}>
          <h1>Change Password</h1>
          <p>Change your password or cancel an action.</p>
          <div className={styles.form_container}>
            <form>
              <input
                ref={currentPassword}
                placeholder="Current password..."
                type="password"
              ></input>
              <input
                ref={newPassword}
                placeholder="New password..."
                type="password"
              ></input>
              <input
                ref={confirmNewPassword}
                placeholder="Confirm new password..."
                type="password"
              ></input>

              <div className={styles.buttons_container}>
                <Link href="/user/account">
                  <a>
                    <button>Cancel</button>
                  </a>
                </Link>

                <a>
                  <button onClick={sendForm} id={styles.long_button}>
                    Save changes
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
