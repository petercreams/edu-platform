import Navbar from "../../../../../components/Home/Navbar";
import CommentCard from "../../../../../components/Lessons/CommentCard";

import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

import styles from "../../../../../styles/lessons/[lessonId].module.scss";
import AddNoteModal from "../../../../../components/Lessons/AddNoteModal";

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

  // TODO: add Modal States object
  // const [isModalOpen, setIsModalOpen] = useState(false);

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

  // ***********************
  // *** NOTES FUNCTIONS ***
  // ***********************

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

  const deleteNoteHandler = () => {
    // set current note data
    const currentNoteData = {
      id: selectedNote.noteId,
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    };

    // search for a selected Note and change its value to current
    comments.forEach((comment, index) => {
      if (comment.id == selectedNote.noteId) {
        comments.splice(index, 1);
      }
    });

    setModalProps((prevState) => {
      return { ...prevState, isDeleteNoteOpen: false };
    });
  };

  const startInterval = (player) => {
    setInterval(() => {
      let currentTime = player.getCurrentTime().toFixed(0);
      setVideoProps((prevState) => {
        return { ...prevState, currentTime: `${currentTime}` };
      });
    }, 1000);
  };

  const openAddNote = () => {
    pauseVideo(videoProps.target);
    setModalProps((prevState) => {
      return { ...prevState, isAddNoteOpen: true };
    });
  };

  const addNoteHandler = () => {
    const data = {
      id: (Math.random() * 10 + 10).toFixed(),
      timeStamp: videoProps.currentTime,
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    };

    comments.unshift(data);
    setModalProps((prevState) => {
      return { ...prevState, isAddNoteOpen: false };
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

  const editNoteHandler = () => {
    // set current note data
    const currentNoteData = {
      id: selectedNote.noteId,
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    };

    // search for a selected Note and change its value to current
    comments.forEach((comment, index) => {
      if (comment.id == selectedNote.noteId) {
        let Note = comments[index];

        comments[index] = { ...Note, ...currentNoteData };
      }
    });

    setModalProps((prevState) => {
      return { ...prevState, isEditNoteOpen: false };
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
  return (
    <>
      <Navbar mode="account" />

      {modalProps.isAddNoteOpen && (
        <div id={styles.modal}>
          {/* Modal Add note */}
          <div className={styles.addComment_container}>
            <div className={styles.top_bar}>
              <h1>Add comment</h1>
              <img onClick={closeHandler} src="/icons/exit.svg" />
            </div>
            <div className={styles.options_container}>
              <p>Current time: {sToTime(videoProps.currentTime)}</p>
              <input
                style={{ fontWeight: "bold" }}
                ref={noteTitle}
                placeholder="Note Title"
              />
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
          {/* <AddNoteModal
            noteText={noteText}
            noteTitle={noteTitle}
            sToTime={sToTime}
            closeHandler={closeHandler}
            videoProps={videoProps}
            comments={comments}
            setModalProps={setModalProps}
          /> */}
        </div>
      )}
      {modalProps.isEditNoteOpen && (
        <div id={styles.modal}>
          {/* Modal Component */}
          <div className={styles.addComment_container}>
            <div className={styles.top_bar}>
              <h1>Edit comment</h1>
              <img onClick={closeHandler} src="/icons/exit.svg" />
            </div>
            <div className={styles.options_container}>
              <p>Current time: {sToTime(selectedNote.timeStamp)}</p>
              <input
                style={{ fontWeight: "bold" }}
                ref={noteTitle}
                placeholder="Note Title"
              />
              <textarea
                ref={noteText}
                placeholder="Note..."
                type="text"
                wrap="soft"
              ></textarea>
              <div className={styles.buttons_container}>
                <button onClick={closeHandler}>Cancel</button>

                <button onClick={editNoteHandler} id={styles.long_button}>
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalProps.isDeleteNoteOpen && (
        <div id={styles.modal}>
          {/* Modal Component */}
          <div className={styles.addComment_container}>
            <div className={styles.top_bar}>
              <h1>Delete Note</h1>
              <img onClick={closeHandler} src="/icons/exit.svg" />
            </div>
            <div className={styles.options_container}>
              <p>Current time: {sToTime(selectedNote.timeStamp)}</p>
              <input
                style={{ fontWeight: "bold" }}
                ref={noteTitle}
                placeholder={selectedNote.noteTitle}
                disabled="true"
              />
              <textarea
                ref={noteText}
                placeholder={selectedNote.noteText}
                type="text"
                wrap="soft"
                disabled="true"
              ></textarea>
              <div className={styles.buttons_container}>
                <button onClick={closeHandler}>Cancel</button>

                <button onClick={deleteNoteHandler} id={styles.long_button}>
                  Delete Note
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
                  timeStamp={sToTime(comment.timeStamp)}
                  noteTitle={comment.noteTitle}
                  noteText={comment.noteText}
                  openEditNote={openEditNote}
                  openDeleteNote={openDeleteNote}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
