import LessonCard from "./LessonCard";

const lessons = [
  {
    id: "1",
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
    id: "3",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "4",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "5",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "6",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "7",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
];

export default function Lessons(props) {
  return (
    <>
      {lessons.map((lesson, index) => {
        index += 1;
        return (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            number={index}
            sectionNum={lesson.sectionNum}
            sectionName={lesson.sectionName}
            subject={lesson.subject}
          />
        );
      })}
    </>
  );
}
