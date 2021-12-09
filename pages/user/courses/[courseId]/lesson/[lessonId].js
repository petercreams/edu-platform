import Navbar from "../../../../../components/Home/Navbar";
import CommentCard from "../../../../../components/Lessons/CommentCard";

import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

import styles from "../../../../../styles/lessons/[lessonId].module.scss";

// TODO: dodać sekcje: quiz, zadania do filmu ( w przyszłości pasek z boku z: praca domowa)

var comments = [
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
    timeStamp: "5",
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
    target: "",
    videoURL: "hl1dKxlRdiM",
    currentTime: "00:00",
    currentState: "1",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const noteTitle = useRef();
  const noteText = useRef();

  const sToTime = (seconds) => {
    // Cut decimal part
    let minutes = Math.trunc(seconds / 60);
    let hours = Math.trunc(seconds / 3600);

    if (minutes >= 60) {
      minutes = minutes % 60;
    }

    let secondsLeft = seconds - minutes * 60 - hours * 3600;

    // Change time display
    if (seconds < 10) seconds = "0" + seconds;
    if (secondsLeft < 10) secondsLeft = "0" + secondsLeft;
    if (minutes < 10) minutes = "0" + minutes;
    if (minutes < 10) hours = "0" + hours;

    if (seconds < 60) return `00:${seconds}`;
    else if ((minutes >= 1) & (hours < 1)) return `${minutes}:${secondsLeft}`;
    else if (hours >= 1) return `${hours}:${minutes}:${secondsLeft}`;
  };

  const videoOnReady = (e) => {
    const player = e.target;

    // add player DOM path to state object
    setVideoProps((prevState) => {
      return { ...prevState, target: player };
    });

    // when player is ready - start checking current time every sec
    startInterval(player);
  };

  const pauseVideo = (player) => {
    player.pauseVideo();
  };

  const playVideo = (player) => {
    player.playVideo();
  };

  const startInterval = (player) => {
    setInterval(() => {
      let currentTime = player.getCurrentTime().toFixed(0);
      setVideoProps((prevState) => {
        return { ...prevState, currentTime: `${currentTime}` };
      });
    }, 1000);
  };

  const addNoteHandler = () => {
    const data = {
      id: "id",
      timeStamp: videoProps.currentTime,
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    };

    console.log(data);

    comments.unshift(data);
    setIsModalOpen(false);
  };

  const openHandler = () => {
    pauseVideo(videoProps.target);
    setIsModalOpen(true);
  };

  const closeHandler = () => {
    playVideo(videoProps.target);
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar mode="account" />
      {isModalOpen && (
        <div id={styles.modal}>
          {/* Modal Component */}
          <div className={styles.modal_container}>
            <div className={styles.top_bar}>
              <h1>Add comment</h1>
              <img onClick={closeHandler} src="/icons/exit.svg" />
            </div>
            <div className={styles.options_container}>
              <p>Actual time: {sToTime(videoProps.currentTime)}</p>
              <input style={{fontWeight: "bold"}} ref={noteTitle} placeholder="Note Title" />
              <textarea
                ref={noteText}
                placeholder="Note..."
                type="text"
                wrap="soft"
              ></textarea>
              <div className={styles.buttons_container}>
                <button onClick={closeHandler}>Cancel</button>

                <button onClick={addNoteHandler} id={styles.long_button}>
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.lesson_container}>
        <h1>Lesson Subject</h1>

        <div className={styles.video_container}>
          <YouTube
            videoId={videoProps.videoURL}
            opts={opts}
            onReady={videoOnReady}
          />
        </div>
        <div className={styles.notes_container}>
          <div onClick={openHandler} className={styles.notes_bar}>
            <p>Make your notes at {sToTime(videoProps.currentTime)}...</p>
            <div className={styles.icon_container}>
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
