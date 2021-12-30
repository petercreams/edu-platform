import styles from "../../../../styles/user/edit/email.module.scss";
import Link from "next/dist/client/link";

import { useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";

import { getAuth, updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function ChangeName(params) {
  const newName = useRef();

  const router = useRouter();

  const [user, loading, error] = useAuthState(getAuth());

  const sendForm = (e) => {
    e.preventDefault();

    updateProfile(user, { displayName: newName.current.value })
      .then(() => router.push("/user/account"))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.account_container}>
      <Navbar mode={"account"} />
      <div className={styles.menu_container}>
        <UserPanel option="account" />
        <div className={styles.right_bar}>
          <h1>Change Name</h1>
          <p>Edit your displayed name or cancel an action.</p>
          <div className={styles.form_container}>
            <form>
              <input
                ref={newName}
                placeholder={user?.displayName}
                type="text"
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
