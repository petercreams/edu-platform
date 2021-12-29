import styles from "../../../../styles/user/edit/email.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";
import { useAuthProvider } from "../../../../firebase/AuthProvider";

import {
  getAuth,
  updateEmail,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
export default function ChangeEmail(params) {
  const newEmail = useRef();
  // const user = useAuthProvider();

  const [user, loading, error] = useAuthState(getAuth());

  const router = useRouter();

  const sendForm = (e) => {
    e.preventDefault();

    updateEmail(user, newEmail.current.value)
      .then(() => router.push("/user/account"))
      .catch((error) => console.log(error));
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
                placeholder={user?.email}
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
