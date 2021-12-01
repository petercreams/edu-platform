import Navbar from "../../../components/Home/Navbar";
import AccountPage from "../../../components/User/AccountPage";
import styles from "../../../styles/user/account.module.scss";

export default function Account(props, { children }) {
  return (
    <>
      <div className={styles.account_container}>
        <Navbar />
        <AccountPage />
      </div>
    </>
  );
}
