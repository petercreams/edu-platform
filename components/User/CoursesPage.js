import styles from "./CoursesPage.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect } from "react";
import UserPanel from "./UserPanel";
import CourseCard from "./CourseCard";

export default function CoursesPage(params) {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  return (
    <div className={styles.menu_container}>
      <UserPanel option="courses" />
      <div className={styles.right_bar}>
        <h1>My Courses</h1>
        <div className={styles.courses_container}>
          <CourseCard
            key="1"
            id="1"
            img="/courses/newtone.png"
            name="Math for 8th grades"
            author="NewTone"
          />
          <CourseCard
            key="2"
            id="2"
            img="/courses/newtone.png"
            name="Math for Matura Exam"
            author="NewTone"
          />
        </div>
      </div>
    </div>
  );
}
