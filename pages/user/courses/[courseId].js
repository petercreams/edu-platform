import Navbar from "../../../components/Home/Navbar";
import LessonCard from "../../../components/Lessons/LessonCard";
import UserPanel from "../../../components/User/UserPanel";
import styles from "../../../styles/courses/[courseId].module.scss";

export default function courseId(params) {
  const filterHandler = () => {
    console.log("filter clicked");
  };

  const sortHandler = () => {
    console.log("sort clicked");
  };

  const sections = [];
  const sort = ["Asc", "Desc"];

  return (
    <div className={styles.courses_container}>
      <Navbar mode={"account"} />
      <div className={styles.menu_container}>
        <UserPanel option="courses" />

        <div className={styles.right_bar}>
          <h1>Course name</h1>
          <div className={styles.options_container}>
            <div className={styles.options__item}>
              <p>Filter by section:</p>
              <span onClick={filterHandler}>1</span>
            </div>
            <div className={styles.options__item}>
              <p>Sort by lesson:</p>
              <span onClick={sortHandler}>Asc</span>
            </div>
          </div>
          <div className={styles.lessons_container}>
            <LessonCard
              number="1"
              sectionNum="1"
              sectionName="Numbers"
              subject="Introduction to numbers"
            />
            <LessonCard
              number="1"
              sectionNum="1"
              sectionName="Numbers"
              subject="Introduction to numbers"
            />
            <LessonCard
              number="1"
              sectionNum="1"
              sectionName="Numbers"
              subject="Introduction to numbers"
            />
            <LessonCard
              number="1"
              sectionNum="1"
              sectionName="Numbers"
              subject="Introduction to numbers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
