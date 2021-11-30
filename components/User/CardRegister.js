import styles from "./CardRegister.module.scss";
import { useState, useRef, useEffect } from "react";
import Link from "next/dist/client/link";

export default function Login(props) {
  const [submit, setSubmit] = useState(false);
  const [errorBlank, setErrorBlank] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const userEmail = useRef();
  const userPassword = useRef();
  const userConfirmPassword = useRef();
  const userName = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      name: userName.current.value,
      email: userEmail.current.value,
      password: userPassword.current.value,
      confirmPassword: userConfirmPassword.current.value,
    };

    // form data validation
    if (
      formData.email == "" ||
      formData.password == "" ||
      formData.confirmPassword == "" ||
      formData.name == ""
    ) {
      setErrorBlank(true);
    }

    if (formData.name.length < 6) {
      setErrorName(true);
    }
    if ((formData.password.length < 6) & (formData.password.length >= 0)) {
      setErrorPassword(true);
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorConfirmPassword(true);
    }
    if (
      (errorBlank == false) &
      (errorPassword == false) &
      (errorConfirmPassword == false)
    ) {
      setSubmit(true);
      //   userName.current.value = null;
      //   userEmail.current.value = null;
      //   userPassword.current.value = null;
      //   userConfirmPassword.current.value = null;
    }

    console.log(formData);
  };

  // disappear send alert after 3s
  useEffect(() => {
    if (submit)
      setTimeout(() => {
        setSubmit(false);
      }, 3000);
  }, [submit]);

  //disappear error alert after 3s
  useEffect(() => {
    if (errorBlank) {
      setTimeout(() => {
        setErrorBlank(false);
      }, 3000);
    }
  }, [errorBlank]);

  //disappear error alert after 3s
  useEffect(() => {
    if (errorName) {
      setTimeout(() => {
        setErrorName(false);
      }, 3000);
    }
  }, [errorName]);

  //disappear error alert after 3s
  useEffect(() => {
    if (errorPassword)
      setTimeout(() => {
        setErrorPassword(false);
      }, 3000);
  }, [errorPassword]);

  //disappear error alert after 3s
  useEffect(() => {
    if (errorConfirmPassword)
      setTimeout(() => {
        setErrorConfirmPassword(false);
      }, 3000);
  }, [errorConfirmPassword]);

  return (
    <form method="post" onSubmit={submitHandler}>
      <div className={styles.contact_container}>
        <div className={styles.contact_email}>
          <input ref={userName} placeholder="Name" type="text"></input>
        </div>
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
        <div className={styles.contact_password}>
          <input
            ref={userConfirmPassword}
            placeholder="Confirm password"
            type="password"
          ></input>
        </div>

        <div className={styles.alert_container}>
          {/* {submit && <p>Form sent successfully</p>}
          {errorBlank && <p>Fill all the blanks to log in</p>}
          {errorPassword && (
            <p>Password length must be at least 6 characters long</p>
          )}
          {errorConfirmPassword && (
            <p>Passwords don't match. Check spelling.</p>
          )} */}
          {errorBlank ? (
            <p>Fill all the blanks to log in</p>
          ) : errorName ? (
            <p>Your name must be at least 6 characters long</p>
          ) : errorPassword ? (
            <p>Password length must be at least 6 characters long</p>
          ) : errorConfirmPassword ? (
            <p>Passwords don't match. Check spelling.</p>
          ) : (
            submit && <p>Form sent successfully</p>
          )}
        </div>

        <div className={styles.button_container}>
          {/* disable button for 5s after send */}
          {submit || errorBlank ? (
            <input type="submit" value="Register" disabled></input>
          ) : (
            <input type="submit" value="Register"></input>
          )}
        </div>

        <div className={styles.register_container}>
          <p>Already have an account?</p>
          <Link href="/user/login">
            <a>Login now</a>
          </Link>
        </div>
      </div>
    </form>
  );
}
