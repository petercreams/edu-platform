import Navbar from "../../../../components/Home/Navbar";
import Lessons from "../../../../components/Lessons/Lessons";
import UserPanel from "../../../../components/User/UserPanel";
import styles from "../../../../styles/courses/[courseId].module.scss";
import { useState, useEffect } from "react";

import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../../../firebase-client/clientApp";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const sort = ["Asc", "Desc"];

export default function courseId(params) {
  const [user, loading, error] = useAuthState(getAuth());
  const [courseName, setCourseName] = useState("");
  const [sections, setSections] = useState([]);

  const [filterValue, setFilterValue] = useState("1");
  const [sortValue, setSortValue] = useState("Asc");

  const [filterClicked, setFilterClicked] = useState(false);
  const [sortClicked, setSortClicked] = useState(false);

  const getCourse = async () => {
    const url = window.location.href;
    const lessonId = url.split("user/courses/")[1];

    const courseRef = await getDoc(doc(db, "courses", lessonId));
    const course = courseRef.data();

    setCourseName(course.title);
    console.log(course);
  };

  const getSections = async () => {
    const url = window.location.href;
    const lessonId = url.split("user/courses/")[1];

    const sectionQuery = query(
      collection(db, "courses", lessonId, "sections"),
      where("owners", "array-contains", user.uid)
    );
    const userSections = await getDocs(sectionQuery);

    // reset sections
    setSections([]);

    // get sections from the server
    userSections.docs.map((section, index) => {
      setSections((prevState) => [...prevState, section.data().section]);
    });
  };

  const filterHandler = () => {
    setFilterClicked(!filterClicked);
    setSortClicked(false);
  };

  const sortHandler = () => {
    setSortClicked(!sortClicked);
    setFilterClicked(false);
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

  useEffect(() => {
    console.log("sortValue", sortValue);
  }, [sortValue, filterValue]);

  useEffect(() => {
    if (user) {
      getSections();
      getCourse();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getSections();
    }
  }, [filterClicked]);

  return (
    <div className={styles.courses_container}>
      <Navbar mode={"account"} />
      <div className={styles.menu_container}>
        <UserPanel option="courses" />

        <div className={styles.right_bar}>
          <h1>{courseName}</h1>
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
            <Lessons sortValue={sortValue} filterValue={filterValue} />
          </div>
        </div>
      </div>
    </div>
  );
}
