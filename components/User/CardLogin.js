import styles from "./CardLogin.module.scss";
import { useState, useRef, useEffect } from "react";

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
    if ((formData.email !== "") & (formData.password !== "") & formData.password.length >= 6) {
      setSubmit(true);

      userEmail.current.value = null;
      userPassword.current.value = null;
    }

    if ((formData.email == "") & (formData.password == "")) {
      setErrorBlank(true);
    }

    if(formData.password.length < 6 & formData.password.length > 0) {
      setErrorPassword(true);
    }
    console.log(formData);
  };

  // disappear send alert after 5s
  useEffect(() => {
    if (submit)
      setTimeout(() => {
        setSubmit(false);
      }, 5000);
  }, [submit]);

  //disappear error alert after 5s
  useEffect(() => {
    if (errorBlank)
      setTimeout(() => {
        setErrorBlank(false);
      }, 5000);
  }, [errorBlank]);

   //disappear error alert after 5s
   useEffect(() => {
    if (errorPassword)
      setTimeout(() => {
        setErrorPassword(false);
      }, 5000);
  }, [errorPassword]);

  return (
    <form method="post" onSubmit={submitHandler}>
      <div className={styles.contact_container}>
        <div className={styles.contact_email}>
          <input ref={userEmail} placeholder="Email" type="email"></input>
        </div>
        <div className={styles.contact_password}>
          <input ref={userPassword} placeholder="Password" type="password"></input>
        </div>
       
        <div className={styles.alert_container}>
          {submit && <p>Form sent successfully</p>}
          {errorBlank && <p>Fill all the blanks to log in</p>}
          {errorPassword && <p>Password length must be at least 6 characters long</p>}
        </div>

        <div className={styles.button_container}>
          {/* disable button for 5s after send */}
          {submit || errorBlank ? (
            <input type="submit" value="Submit" disabled></input>
          ) : (
            <input type="submit" value="Submit"></input>
          )}
        </div>
      </div>
    </form>
  );
}