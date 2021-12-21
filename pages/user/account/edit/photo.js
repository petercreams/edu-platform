import styles from "../../../../styles/user/edit/photo.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";
import { useAuthProvider } from "../../../../firebase/AuthProvider";

export default function ChangePhoto(params) {
  const user = useAuthProvider();

  const [userPhoto, setUserPhoto] = useState(user?.photoURL);
  const newPhoto = useRef();


  const sendForm = (e) => {
    e.preventDefault();

    var file = newPhoto.current.files[0];

    setUserPhoto(file);

    console.log("Form sent");

    console.log(file);
  };

  const handleChange = () => {
    const reader = new FileReader();

    var file = newPhoto.current.files[0];

    reader.onload = () => {
      var dataURL = reader.result;
      setUserPhoto(dataURL);
    };

    reader.readAsDataURL(file);
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
                {/* <img src={user.phtotoURL ? user.phtotoURL : "/icons/default_photo.jpg"} /> */}
                <img src={userPhoto ? userPhoto : "/icons/default_photo.jpg"} />
                <img id={styles.edit} src="/icons/edit.svg" />
                <input
                  ref={newPhoto}
                  type="file"
                  onChange={handleChange}
                  accept="image/png, image/jpeg, image/jpg"
                ></input>
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
