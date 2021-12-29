import styles from "./UserPanel.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { auth } from "../../firebase-client/clientApp";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { withProtected } from "../../firebase/routes";

export default function UserPanel(props) {
  var option = props.option;

  const router = useRouter();

  // const user = useAuthProvider();

  // const { logout } = useUser();

  const [user, loading, error] = useAuthState(getAuth());

  const signOut = () => {
    // logout();
  };

  return (
    <div className={styles.userPanel_container}>
      <img src={user?.photoURL ? user.photoURL : "/icons/default_photo.jpg"} />
      <h1>{user?.displayName ? user.displayName : "nickname"}</h1>

      <p
        onClick={() => router.push("/user/account")}
        id={option == "courses" ? styles.account_off : styles.account_on}
      >
        My Account
      </p>

      <p
        onClick={() => router.push("/user/courses")}
        id={option == "courses" ? styles.courses_on : styles.courses_off}
      >
        My Courses
      </p>

      <p onClick={signOut} id={styles.logout}>
        Log Out
      </p>
    </div>
  );
}
