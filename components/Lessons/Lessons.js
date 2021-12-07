import LessonCard from "./LessonCard";

import { useEffect, useState } from "react";
import Link from "next/dist/client/link";

const allLessons = [
  {
    id: "1",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "9",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "2",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "7",
    sectionNum: "5",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "4",
    sectionNum: "4",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "6",
    sectionNum: "3",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "10",
    sectionNum: "2",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "31",
    sectionNum: "2",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "2",
    sectionNum: "2",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "27",
    sectionNum: "2",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
];

// mogę pobierać z serwera poszczególne sekcje - wtedy mniej danych się będzie zaciągać

// const lessons = [];

export default function Lessons({ sortValue }) {
  //   //Filter values
  //   useEffect(() => {
  //     allLessons.filter((lesson) => {
  //       if (lesson.sectionNum == sortValue) lessons.push(lesson);
  //     });
  //     return lessons;
  //   }, [filterValue]);

  const [refresh, setRefresh] = useState(false)
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (sortValue == "Asc") {
      allLessons.sort((a, b) => {
        return parseInt(a.id) - parseInt(b.id);
      });
    } else if (sortValue == "Desc") {
      allLessons.sort((a, b) => {
        return parseInt(b.id) - parseInt(a.id);
      });
    }
    setLessons(allLessons);
    setRefresh(true);
  }, [sortValue]);

  useEffect(() => {
    setRefresh(false);
  }, [refresh])

  return (
    <>
      {!refresh && lessons.map((lesson, index) => {
        index += 1;
        return (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            number={lesson.id}
            sectionNum={lesson.sectionNum}
            sectionName={lesson.sectionName}
            subject={lesson.subject}
          />
        );
      })}
    </>
  );
}
