import LessonCard from "./LessonCard";

import { useEffect, useState } from "react";

import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-client/clientApp";

export default function Lessons({ sortValue, filterValue }) {
  const getLessons = async () => {
    const url = window.location.href;
    const lessonId = url.split("user/courses/")[1];

    console.log(filterValue, "filterValue");

    const sectionData = await getDoc(
      doc(db, "courses", lessonId, "sections", filterValue)
    );

    console.log(sectionData.data());

    const sectionLessons = await getDocs(
      collection(db, "courses", lessonId, "sections", filterValue, "lessons")
    );

    sectionLessons.docs.map((lesson, index) => {
      console.log(lesson.data());
      setLessons((prevState) => [
        ...prevState,
        {
          key: lesson.data().number,
          id: lesson.data().number,
          subject: lesson.data().subject,
          sectionNum: sectionData.data().section,
          sectionName: sectionData.data().sectionName,
        },
      ]);
    });
  };

  const [refresh, setRefresh] = useState(false);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (sortValue == "Asc") {
      lessons.sort((a, b) => {
        return parseInt(a.id) - parseInt(b.id);
      });
    } else if (sortValue == "Desc") {
      lessons.sort((a, b) => {
        return parseInt(b.id) - parseInt(a.id);
      });
    }
    setLessons(lessons);
    setRefresh(true);
  }, [sortValue]);

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    setLessons([]);
    getLessons();
  }, [filterValue]);

  return (
    <>
      {!refresh &&
        lessons.map((lesson, index) => {
          index += 1;
          return (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              number={lesson.id}
              sectionNum={lesson.sectionNum}
              sectionName={lesson.sectionName}
              subject={lesson.subject}
              course={window.location.href.split("user/courses/")[1]}
            />
          );
        })}
    </>
  );
}
