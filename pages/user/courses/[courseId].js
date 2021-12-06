import Navbar from "../../../components/Home/Navbar";
import Lessons from "../../../components/Lessons/Lessons";
import UserPanel from "../../../components/User/UserPanel";
import styles from "../../../styles/courses/[courseId].module.scss";
import { useState } from "react";

const sections = ["1", "2", "3", "4", "5"];
const sort = ["Asc", "Desc"];

export default function courseId(params) {
  const [filterValue, setFilterValue] = useState("1");
  const [sortValue, setSortValue] = useState("Asc");

  const [filterClicked, setFilterClicked] = useState(false);
  const [sortClicked, setSortClicked] = useState(false);

  const filterHandler = () => {
    setFilterClicked(true);
  };

  const sortHandler = () => {
    console.log("sort clicked");

    setSortClicked(true);
  };

  const selectFilter = (e) => {
    let value = e.target.innerText;
    setFilterValue(value);
    setFilterClicked(false);
  };

  const selectSort = (e) => {
    let value = e.target.innerText;
    setSortValue(value);
    setSortClicked(false);
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
              <span onClick={filterHandler}>{filterValue}</span>
              {filterClicked && (
                <div className={styles.modal_container}>
                  <ul>
                    {sections.map((section) => {
                      return (
                        <li onClick={(e) => selectFilter(e)}>{section}</li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.options__item}>
              <p>Sort by lesson:</p>
              <span onClick={sortHandler}>{sortValue}</span>
              {sortClicked && (
                <div className={styles.modal_container}>
                  <ul>
                    {sort.map((sortElement) => {
                      return (
                        <li onClick={(e) => selectSort(e)}>{sortElement}</li>
                      );
                    })}
                  </ul>
                </div>
              )}
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
