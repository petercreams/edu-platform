import styles from "../../../../styles/user/edit/email.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";

export default function ChangeEmail(params) {
  const newEmail = useRef();

  const sendForm = (e) => {
    // e.preventDefault();

    const formData = {
      newEmail: newEmail.current.value,
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
          <h1>Change Email</h1>
          <p>Edit your displayed email or cancel an action.</p>
          <div className={styles.form_container}>
            <form>
              <input
                ref={newEmail}
                placeholder="youremail@adress.com"
                type="email"
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
