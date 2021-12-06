import Navbar from "../../../components/Home/Navbar";
import CoursesPage from "../../../components/User/CoursesPage";
import styles from "../../../styles/user/courses.module.scss";

export default function Courses(props, { children }) {
  console.log("Courses loaded");
  return (
    <>
      <div className={styles.courses_container}>
        <Navbar mode={"account"}/>
        <CoursesPage />
      </div>
    </>
  );
}
