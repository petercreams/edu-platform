import CourseCard from "./CourseCard";
import { useState, useEffect } from "react";

const courses = [
  {
    id: "1",
    img: "/courses/newtone.png",
    name: "Math for 8th grades",
    author: "NewTone",
  },
  {
    id: "2",
    img: "/courses/newtone.png",
    name: "Math for Matura Exam",
    author: "NewTone",
  },
];

export default function Courses() {
  return (
    <>
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            id={course.id}
            img={course.img}
            name={course.name}
            author={course.author}
          />
        );
      })}

    </>
  );
}
