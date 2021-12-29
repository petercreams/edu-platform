import styles from "../../../../styles/user/edit/photo.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect, useRef } from "react";
import UserPanel from "../../../../components/User/UserPanel";
import Navbar from "../../../../components/Home/Navbar";
import { useAuthProvider } from "../../../../firebase/AuthProvider";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  addDoc,
  setDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { useRouter } from "next/router";

export default function ChangePhoto(params) {
  const newPhoto = useRef();

  const [user, loading, error] = useAuthState(getAuth());
  const [userPhoto, setUserPhoto] = useState(user?.photoURL);

  const router = useRouter();

  const uploadPhoto = (e) => {
    e.preventDefault();

    var file = newPhoto.current.files[0];

    const storage = getStorage();

    const storageRef = ref(storage, `profile_photos/${user.uid}`);

    console.log(storageRef);

    uploadBytes(storageRef, file).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(storageRef);
      updateProfile(user, { photoURL: downloadURL })
        .then(() => router.push("/user/account"))
        .catch((error) => console.log(error));
    });
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
                  <button onClick={uploadPhoto} id={styles.long_button}>
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
