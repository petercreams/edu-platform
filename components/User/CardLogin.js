import styles from "./CardLogin.module.scss";
import { useState, useRef, useEffect } from "react";
import Link from "next/dist/client/link";

export default function Login(props) {
  const [submit, setSubmit] = useState(false);
  const [errorBlank, setErrorBlank] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const userEmail = useRef();
  const userPassword = useRef();

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
    console.log(formData);
  };

  // disappear send alert after 3s
  useEffect(() => {
    if (submit) {
      console.log("submit: " + submit);
      setTimeout(() => {
        setSubmit(false);
        userEmail.current.value = null;
        userPassword.current.value = null;
      }, 3000);
    }
  }, [submit]);

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
          ) : (
            submit && <p>Form sent successfully</p>
          )}
        </div>

        <div className={styles.button_container}>
          {/* disable button for 5s after send */}
          {submit || errorBlank || errorPassword ? (
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
