import Navbar from "../../../../../components/Home/Navbar";
import CommentCard from "../../../../../components/Lessons/CommentCard";

import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

import styles from "../../../../../styles/lessons/[lessonId].module.scss";
import AddNoteModal from "../../../../../components/Lessons/AddNoteModal";
import EditNoteModal from "../../../../../components/Lessons/EditNoteModal";
import DeleteNoteModal from "../../../../../components/Lessons/DeleteNoteModal";

// TODO: dodać sekcje: quiz, zadania do filmu ( w przyszłości pasek z boku z: praca domowa)

var comments = [
  {
    id: "1",
    timeStamp: "3520",
    noteTitle: "Test1",
    noteText: "Fajna ta funkcjonalność związana z pisaniem komentarzy? Najak",
  },
  {
    id: "2",
    timeStamp: "4555",
    noteTitle: "Test2",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
  {
    id: "3",
    timeStamp: "23",
    noteTitle: "Test3",
    noteText:
      "React jest fajny, aczkolwiek wymaga sporo pracy, żeby móc zacząć pisać coś sensownego. Na start trzeba umieć pisać w HTML, CSS i JS, dopiero wtedy można myśleć o tym, żeby próbować swoich sił w frameworku",
  },
  {
    id: "4",
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

  const [modalProps, setModalProps] = useState({
    isAddNoteOpen: false,
    isEditNoteOpen: false,
    isDeleteNoteOpen: false,
  });

  const [selectedNote, setSelectedNote] = useState({
    noteId: "",
    noteTitle: "",
    timeStamp: "",
    noteText: "",
  });

  const noteTitle = useRef();
  const noteText = useRef();

  // On edit/delete note - open modal and set note values
  useEffect(() => {
    if (modalProps.isEditNoteOpen) {
      console.log(selectedNote, "useEffect");
      noteTitle.current.value = selectedNote.noteTitle;
      noteText.current.value = selectedNote.noteText;
    }
  }, [modalProps.isEditNoteOpen, modalProps.isDeleteNoteOpen]);

  // ***********************
  // *** PLAYER FUNCTIONS ***
  // ***********************

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

  const playVideoAt = (startSec) => {
    videoProps.target.seekTo(startSec);
  }

  const startInterval = (player) => {
    setInterval(() => {
      let currentTime = player.getCurrentTime().toFixed(0);
      setVideoProps((prevState) => {
        return { ...prevState, currentTime: `${currentTime}` };
      });
    }, 1000);
  };

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

  // ***********************
  // *** NOTES FUNCTIONS ***
  // **********************

  const openAddNote = () => {
    pauseVideo(videoProps.target);
    setModalProps((prevState) => {
      return { ...prevState, isAddNoteOpen: true };
    });
  };

  const openEditNote = (id) => {
    pauseVideo(videoProps.target);

    let Note = comments.find((comment) => comment.id == id);

    setSelectedNote((prevState) => {
      return {
        ...prevState,
        noteId: id,
        timeStamp: Note.timeStamp,
        noteTitle: Note.noteTitle,
        noteText: Note.noteText,
      };
    });
    console.log("Note", Note);

    setModalProps((prevState) => {
      return { ...prevState, isEditNoteOpen: true };
    });
  };

  const openDeleteNote = (id) => {
    pauseVideo(videoProps.target);

    let Note = comments.find((comment) => comment.id == id);

    setSelectedNote((prevState) => {
      return {
        ...prevState,
        noteId: id,
        timeStamp: Note.timeStamp,
        noteTitle: Note.noteTitle,
        noteText: Note.noteText,
      };
    });
    console.log("Note", Note);

    setModalProps((prevState) => {
      return { ...prevState, isDeleteNoteOpen: true };
    });
  };

  const closeHandler = () => {
    playVideo(videoProps.target);
    setModalProps((prevState) => {
      return {
        ...prevState,
        isAddNoteOpen: false,
        isEditNoteOpen: false,
        isDeleteNoteOpen: false,
      };
    });
  };

  /////////////////////////////////////////////////////////////

  return (
    <>
      <Navbar mode="account" />

      {modalProps.isAddNoteOpen && (
        <div id={styles.modal}>
          {/* Modal Add note */}
          <AddNoteModal
            noteText={noteText}
            noteTitle={noteTitle}
            sToTime={sToTime}
            closeHandler={closeHandler}
            videoProps={videoProps}
            comments={comments}
            setModalProps={setModalProps}
          />
        </div>
      )}
      {modalProps.isEditNoteOpen && (
        <div id={styles.modal}>
          <EditNoteModal
            noteText={noteText}
            noteTitle={noteTitle}
            sToTime={sToTime}
            closeHandler={closeHandler}
            videoProps={videoProps}
            comments={comments}
            setModalProps={setModalProps}
            selectedNote={selectedNote}
          />
        </div>
      )}
      {modalProps.isDeleteNoteOpen && (
        <div id={styles.modal}>
          <DeleteNoteModal
            noteText={noteText}
            noteTitle={noteTitle}
            sToTime={sToTime}
            closeHandler={closeHandler}
            videoProps={videoProps}
            comments={comments}
            setModalProps={setModalProps}
            selectedNote={selectedNote}
          />
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
          <div onClick={openAddNote} className={styles.notes_bar}>
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
                  sToTime={sToTime}
                  timeStamp={comment.timeStamp}
                  noteTitle={comment.noteTitle}
                  noteText={comment.noteText}
                  openEditNote={openEditNote}
                  openDeleteNote={openDeleteNote}
                  playVideoAt={playVideoAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
