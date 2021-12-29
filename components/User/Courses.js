import CourseCard from "./CourseCard";
import { useState, useEffect } from "react";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase-client/clientApp";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Courses() {
  const [user, loading, error] = useAuthState(getAuth());

  // console.log(user)

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses([]);
    getCourses();
  }, [user]);

  const getCourses = async () => {
    const coursesRef = collection(db, "courses");

    if (user) {
      const userCourses = query(
        coursesRef,
        where("owners", "array-contains", user.uid)
      );

      const snapshot = await getDocs(userCourses);

      snapshot.docs.map((document, index) => {
        if (Object.keys(document.data()).length !== 0) {
          console.log(document.data());
          setCourses((prevState) => [
            ...prevState,
            {
              key: index,
              id: document.data().id,
              author: document.data().author,
              img: document.data().img,
              title: document.data().title,
            },
          ]);
        }
      });
    }
  };

  const getCourses2 = async () => {
    const coursesRef = collection(db, "courses");

    // const snapshot = await getDocs(coursesRef);
    // const snapshot = await getDocs(coursesRef);

    // const snapshot = await getDoc(doc(db, "courses", "math-8", "sections", "2"))

    // console.log(snapshot.data());

    const snapshot = await getDocs(
      collection(db, "courses", "math-8", "sections")
    );

    snapshot.docs.map((document) => {
      console.log(document.data());
    });

    // snapshot.docs.map((document, index) => console.log(document.data(), index));
  };

  return (
    <>
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            id={course.id}
            img={course.img}
            name={course.title}
            author={course.author}
          />
        );
      })}
    </>
  );
}
