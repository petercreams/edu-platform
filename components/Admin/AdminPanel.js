import styles from "./AdminPanel.module.scss";
import { useRouter } from "next/router";

export default function AdminPanel(props) {
  const router = useRouter();

  const signOut = () => {
    // sign out - server
    console.log("User has been signed out");
  };
  return (
    <div className={styles.adminPanel_container}>
      <img src="/teachers/teacher1.jpg" />
      <h1>Piotr Śmietanka</h1>

        <p onClick={() => router.push("/user/admin")}>
         Admin Panel
        </p>

      <p onClick={signOut} id={styles.logout} >
        Log Out
      </p>
    </div>
  );
}
