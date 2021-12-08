import styles from "../../../../styles/user/edit/photo.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";

export default function ChangePhoto(params) {
  const newPhoto = useRef();

  const sendForm = (e) => {
    e.preventDefault();

    const formData = {
      newPhoto: newPhoto.current.value,
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
          <h1>Change Photo</h1>
          <p>Edit your displayed photo or cancel an action.</p>
          <div className={styles.form_container}>
            <form>
              <label>
                <img src="/teachers/teacher1.jpg" />
                <img id={styles.edit} src="/icons/edit.svg" />
                <input ref={newPhoto} type="file"></input>
              </label>

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
