import styles from "./CardContact.module.scss";

import { useState, useRef, useEffect } from "react";

export default function CardContact(props) {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  const userEmail = useRef();
  const userText = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      email: userEmail.current.value,
      text: userText.current.value,
    };

    if ((formData.email !== "") & (formData.text !== "")) {
      setSubmit(true);

      userEmail.current.value = null;
      userText.current.value = null;
    } else {
      setError(true);
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
    if (error)
      setTimeout(() => {
        setError(false);
      }, 5000);
  }, [error]);

  const alertHandler = () => {
    return <p>Form sent successfully</p>;
  };
  return (
    <form method="post" onSubmit={submitHandler}>
      <div className={styles.contact_container}>
        <div className={styles.contact_email}>
          <input ref={userEmail} placeholder="Email..." type="email"></input>
        </div>
        <div className={styles.contact_text}>
          <input ref={userText} placeholder="Message..." type="text"></input>
        </div>
        <div className={styles.button_container}>
          {/* disable button for 5s after send */}
          {submit ? (
            <input type="submit" value="Submit" disabled></input>
          ) : (
            <input type="submit" value="Submit"></input>
          )}
        </div>
        <div className={styles.alert_container}>
          {submit && <p>Form sent successfully</p>}
          {error && <p>Fill all the blanks before send</p>}
        </div>
      </div>
    </form>
  );
}
