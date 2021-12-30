import styles from "./CoursesPage.module.scss";
import Link from "next/dist/client/link";

import { useState, useEffect } from "react";
import UserPanel from "./UserPanel";
import CourseCard from "./CourseCard";
import Courses from "./Courses";

export default function CoursesPage(params) {
  return (
    <div className={styles.menu_container}>
      <UserPanel option="courses" />
      <div className={styles.right_bar}>
        <h1>My Courses</h1>
        <div className={styles.courses_container}>
          <Courses />
        </div>
      </div>
    </div>
  );
}
