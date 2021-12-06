import Navbar from "../../../components/Home/Navbar";
import AccountPage from "../../../components/User/AccountPageTest";
import styles from "../../../styles/user/account.module.scss";

export default function Account(props, { children }) {
  console.log("Account loaded");

  return (
    <>
      <div className={styles.account_container}>
        <Navbar mode={"account"} />
        <AccountPage />
      </div>
    </>
  );
}
