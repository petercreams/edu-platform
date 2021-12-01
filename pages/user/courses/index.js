import Navbar from "../../../components/Home/Navbar";
import CoursesPage from "../../../components/User/CoursesPage";
import styles from "../../../styles/user/account.module.scss";

export default function Account(props, { children }) {
  return (
    <>
      <div className={styles.account_container}>
        <Navbar />
        <CoursesPage />
      </div>
    </>
  );
}
