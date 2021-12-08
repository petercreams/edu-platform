import Navbar from "../../../../../components/Home/Navbar";
import CommentCard from "../../../../../components/Lessons/CommentCard";

import { useState, useEffect } from "react";
import YouTube from "react-youtube";

import styles from "../../../../../styles/lessons/[lessonId].module.scss";

const comments = [
  {
    id: "123",
    timeStamp: "3520",
    noteTitle: "Test1",
    noteText: "Fajna ta funkcjonalność związana z pisaniem komentarzy? Najak",
  },
  {
    id: "123",
    timeStamp: "4555",
    noteTitle: "Test2",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
  {
    id: "123",
    timeStamp: "23",
    noteTitle: "Test3",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
  {
    id: "12",
    timeStamp: "125",
    noteTitle: "Test3",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
];

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
  },
};

export default function lessonId(props) {
  const [videoProps, setVideoProps] = useState({
    videoURL: "hl1dKxlRdiM",
    currentTime: "0:00",
    currentState: "1",
  });


  const sToTime = (seconds) => {
    let minutes = Math.trunc(seconds / 60);

    if (minutes >= 60) {
      minutes = minutes % 60;
    }

    let hours = Math.trunc(seconds / 3600);

    let secondsLeft = seconds - minutes * 60 - hours * 3600;


    // Change display
    if (secondsLeft < 10) secondsLeft = "0" + secondsLeft;
    if (minutes < 10) minutes = "0" + minutes;
    if (minutes < 10) hours = "0" + hours;

    console.log(seconds, minutes, hours, secondsLeft);
    if (seconds < 60) return `00:${seconds}`;
    else if ((minutes >= 1) & (hours < 1)) return `${minutes}:${secondsLeft}`;
    else if (hours >= 1) return `${hours}:${minutes}:${secondsLeft}`;
  };

  const videoOnPause = () => {
    setVideoProps((prevState) => {
      return { ...prevState, currentState: "0" };
    });
  };

  const videoOnPlay = (e) => {
    const player = e.target;

    setVideoProps((prevState) => {
      return { ...prevState, currentState: "1" };
    });

    // setTimeout(() => {
    //   if (videoProps.currentState == 1) {
    //     setTimeout(() => {
    //       console.log(videoProps.currentState, "isPlaying");
    //       console.log(Math.round(player.getCurrentTime(), 0), "ms");
    //       setVideoProps( (prevState) => {return {...prevState, currentTime: {}} });
    //     }, [1000]);
    //   }
    // });

    console.log(Math.round(player.getCurrentTime(), 0), "s");
    let currentTime = player.getCurrentTime().toFixed(0);
    currentTime = sToTime(currentTime);
    console.log(currentTime, "current time");
    setVideoProps((prevState) => {
      return { ...prevState, currentTime: `${currentTime}` };
    });
  };

  //   useEffect(() => {
  //     setVideoProps( (prevState) => {return {...prevState, currentTime: {}}});
  //   }, [videoProps.currentState])

  const addCommentHandler = () => {};
  return (
    <>
      <Navbar mode="account" />
      <div className={styles.lesson_container}>
        <h1>Lesson Subject</h1>

        <div className={styles.video_container}>
          <YouTube
            videoId={videoProps.videoURL}
            opts={opts}
            onPlay={videoOnPlay}
            onPause={videoOnPause}
          />
        </div>
        <div className={styles.notes_container}>
          <div className={styles.notes_bar}>
            <p>{`Make your notes at ${videoProps.currentTime}...`}</p>
            <div onClick={addCommentHandler} className={styles.icon_container}>
              <img src="/icons/add.svg" />
            </div>
          </div>
          <div className={styles.comments_container}>
            {comments.map((comment) => {
              return (
                <CommentCard
                  id={comment.id}
                  timeStamp={sToTime(comment.timeStamp)}
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
