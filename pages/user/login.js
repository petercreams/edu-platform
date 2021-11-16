import TitleCard from "../../components/Home/TitleCard";
import CardLogin from "../../components/User/CardLogin";

import styles from "../../styles/user/login.module.scss";

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
          <img src="/illustrations/login-photo.svg"></img>
        </div>
        <div className={styles.contact_right_bar}>
          <div className={styles.title_container}>
            <TitleCard title="Login Page" />
          </div>
          <div className={styles.form_container}>
            <CardLogin />
          </div>

          <div className={styles.login_page_ellipse}></div>
        </div>
      </div>
    </>
  );
}
