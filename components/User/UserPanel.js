import styles from "./UserPanel.module.scss";
import Link from "next/dist/client/link";

export default function UserPanel(props) {
  return (
    <div className={styles.userPanel_container}>
        <img src="/teachers/teacher1.jpg" />
        <h1>Piotr Śmietanka</h1>
        <Link href="/user/account">
        <a id={styles.account}>My Account</a>
        </Link>
        <Link href="/user/courses">
        <a id={styles.courses}>My Courses</a>
        </Link>
        
        <a id={styles.logout}>Log Out</a>
      </div>
  );
}
