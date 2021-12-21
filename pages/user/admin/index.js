import AdminPage from "../../../components/Admin/AdminPage";
import Navbar from "../../../components/Home/Navbar";
import styles from "../../../styles/user/account.module.scss";

export default function Admin(props, { children }) {

  return (
    <>
      <div className={styles.account_container}>
        <Navbar mode={"admin"} />
        <AdminPage />
      </div>
    </>
  );
}
