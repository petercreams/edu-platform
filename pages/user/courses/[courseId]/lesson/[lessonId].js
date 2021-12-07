import Navbar from "../../../../../components/Home/Navbar";
import CommentCard from "../../../../../components/Lessons/CommentCard";

import { useState } from "react";

import styles from "../../../../../styles/lessons/[lessonId].module.scss";

const comments = [
  {
    id: "123",
    timeStamp: "23:02",
    noteTitle: "Test1",
    noteText: "Fajna ta funkcjonalność związana z pisaniem komentarzy? Najak",
  },
  {
    id: "123",
    timeStamp: "01:02:03",
    noteTitle: "Test2",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
  {
    id: "123",
    timeStamp: "1:31",
    noteTitle: "Test3",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
  {
    id: "123",
    timeStamp: "0:22",
    noteTitle: "Test3",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
];

const video = [
  {
    videoURL: "sdjskdjas",
  },
];

export default function lessonId(props) {
  const [currentTime, setCurrentTime] = useState("0:00");

  const addCommentHandler = () => {};
  return (
    <>
      <Navbar mode="account" />
      <div className={styles.lesson_container}>
        <h1>Lesson Subject</h1>
        {/* Video Component */}
        <div className={styles.video_container}>
          <img src="/lessons/lesson_template.jpg" />
        </div>
        {/* Notes Component */}
        <div className={styles.notes_container}>
          <div className={styles.notes_bar}>
            <p>{`Make your notes at ${currentTime}...`}</p>
            <div onClick={addCommentHandler} className={styles.icon_container}>
              <img src="/icons/add.svg" />
            </div>
          </div>
          <div className={styles.comments_container}>
            {comments.map((comment) => {
              return (
                <CommentCard
                  id={comment.id}
                  timeStamp={comment.timeStamp}
                  noteTitle={comment.noteTitle}
                  noteText={comment.noteText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
