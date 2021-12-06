import LessonCard from "./LessonCard";

const lessons = [
  {
    id: "123",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "123",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "123",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "123",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "123",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "123",
    sectionNum: "1",
    sectionName: "Numbers",
    subject: "Introduction to numbers",
  },
  {
    id: "123",
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
