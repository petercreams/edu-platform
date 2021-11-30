import TitleCard from "../../components/Home/TitleCard";
import CardRegister from "../../components/User/CardRegister";

import styles from "../../styles/user/register.module.scss";

export default function Login(props, { children }) {
  const presentYear = new Date().getFullYear();
  return (
    // <div>
    //   <LoginForm />
    // </div>
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <div className={styles.auth_container}>
        <div className={styles.contact_left_bar}>
          <img src="/illustrations/register-photo.svg"></img>
        </div>
        <div className={styles.contact_right_bar}>
          <div className={styles.title_container}>
            <TitleCard title="Register Page" />
          </div>
          <div className={styles.form_container}>
            <CardRegister />
          </div>

          <div className={styles.login_page_ellipse}></div>
        </div>
      </div>
    </>
  );
}
