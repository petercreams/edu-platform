import Navbar from "../../../components/Home/Navbar";
import Lessons from "../../../components/Lessons/Lessons";
import UserPanel from "../../../components/User/UserPanel";
import styles from "../../../styles/courses/[courseId].module.scss";
import { useState } from "react";

const sections = [];
const sort = ["Asc", "Desc"];

export default function courseId(params) {

    const [filterClicked, setFilterClicked] = useState(false);
    const [sortClicked, setSortClicked] = useState(false)

  const filterHandler = () => {
    console.log("filter clicked");
    setFilterClicked(!filterClicked);
  };

  const sortHandler = () => {
    console.log("sort clicked");

    setSortClicked(true);
  };

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
              {filterClicked && <div>xD</div>}
            </div>
            <div className={styles.options__item}>
              <p>Sort by lesson:</p>
              <span onClick={sortHandler}>Asc</span>
            </div>
          </div>

          <div className={styles.lessons_container}>
            <Lessons />
          </div>
        </div>
      </div>
    </div>
  );
}
