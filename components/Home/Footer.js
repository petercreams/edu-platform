import styles from "./Footer.module.scss";

export default function Footer(props) {
  const presentYear = new Date().getFullYear();
  return (
    <div className={styles.footer_container}>
      <div className={styles.text_container}>
        <p>{"© " + presentYear + " Piotr Śmietanka"}</p>
        <p>Designed & Developed</p>
      </div>
    </div>
  );
}
