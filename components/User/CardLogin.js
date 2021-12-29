import styles from "./CardLogin.module.scss";
import { useState, useRef, useEffect } from "react";
import Link from "next/dist/client/link";
import axios from "axios";
import { useRouter } from "next/router";

import { auth } from "../../firebase-client/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const [submit, setSubmit] = useState(false);
  const [errorBlank, setErrorBlank] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

  const userEmail = useRef();
  const userPassword = useRef();

  const router = useRouter();

  // Send data to the endpoint
  const postData = async (email, password) => {
    // const data = { email: email, password: password };

    // axios
    //   .post(process.env.NEXT_PUBLIC_SERVER_HOST + "/user/login", data)
    //   .then((response) => {
    //     if (response.data.error) {
    //       console.log(response.data.error);
    //       setServerResponse(response.data.error);
    //     } else {
    //       // console.log(response.data);

    //       // get all user's data
    //       const { displayName, email, photoURL, uid } =
    //         response.data.userCredential.user;
    //       const jwt = response.data.token;
    //       localStorage.setItem("JWT", jwt);
    //       console.log(displayName, email, photoURL, uid, jwt);

    //       // send data to auth context/provider or jwt only

    //       window.location.href = "/";
    //     }
    //   });

    signInWithEmailAndPassword(auth, email, password).then((data) =>
      router.push("/")
    );
    // console.log(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      email: userEmail.current.value,
      password: userPassword.current.value,
    };

    // form data validation
    if (formData.email == "" || formData.password == "") {
      setErrorBlank(true);
    } else if (
      (formData.password.length < 6) &
      (formData.password.length >= 0)
    ) {
      setErrorPassword(true);
    } else if ((errorBlank == false) & (errorPassword == false)) {
      setSubmit(true);
    }

    postData(formData.email, formData.password);
  };

  //disappear error alert after 3s
  useEffect(() => {
    if (errorBlank)
      setTimeout(() => {
        setErrorBlank(false);
      }, 3000);
  }, [errorBlank]);

  //disappear error alert after 3s
  useEffect(() => {
    if (errorPassword)
      setTimeout(() => {
        setErrorPassword(false);
      }, 3000);
  }, [errorPassword]);

  //disappear error alert after 3s
  useEffect(() => {
    if (serverResponse.length > 0)
      setTimeout(() => {
        setServerResponse("");
      }, 3000);
  }, [serverResponse]);

  return (
    <form method="post" onSubmit={submitHandler}>
      <div className={styles.contact_container}>
        <div className={styles.contact_email}>
          <input ref={userEmail} placeholder="Email" type="email"></input>
        </div>
        <div className={styles.contact_password}>
          <input
            ref={userPassword}
            placeholder="Password"
            type="password"
          ></input>
        </div>

        <div className={styles.alert_container}>
          {errorBlank ? (
            <p>Fill all the blanks to log in</p>
          ) : errorPassword ? (
            <p>Password length must be at least 6 characters long</p>
          ) : serverResponse.length > 0 ? (
            <p>{serverResponse}</p>
          ) : (
            submit && <p>Form sent successfully</p>
          )}
        </div>

        <div className={styles.button_container}>
          {/* disable button for 5s after send */}
          {submit || errorBlank || errorPassword || serverResponse ? (
            <input type="submit" value="Log In" disabled></input>
          ) : (
            <input type="submit" value="Log In"></input>
          )}
        </div>
        <div className={styles.register_container}>
          <p>Don't have an account yet?</p>
          <Link href="/user/register">
            <a>Register now</a>
          </Link>
        </div>
      </div>
    </form>
  );
}
