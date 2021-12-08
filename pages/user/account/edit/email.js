import styles from "../../../../styles/user/edit/email.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";

export default function ChangeEmail(params) {
  const sendForm = (e) => {
    // e.preventDefault();
    console.log("Form sent");
  };

  return (
    <div className={styles.account_container}>
      <Navbar mode={"account"} />
      <div className={styles.menu_container}>
        <UserPanel option="account" />
        <div className={styles.right_bar}>
          <h1>Change Email</h1>
          <p>Edit your displayed name or cancel an action.</p>
            <div className={styles.form_container}>
            <form>
              <input placeholder="youremail@adress.com" type="email"></input>

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
