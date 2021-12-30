import styles from "./NoteModal.module.scss";

import { db } from "../../firebase-client/clientApp";

import {
  doc,
  getDoc,
  setDoc,
  query,
  where,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export default function EditNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
  comments,
  setModalProps,
  selectedNote,
  user,
}) {
  const editNoteHandler = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const lessonId = queryParams.get("lesson");
    const sectionNum = queryParams.get("section");
    const courseName = queryParams.get("course");

    // set current note data
    const currentNoteData = {
      id: selectedNote.id,
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
      timeStamp: selectedNote.timeStamp,
    };
    console.log(selectedNote);
    const commentsRef = doc(
      db,
      "courses",
      courseName,
      "sections",
      sectionNum,
      "lessons",
      lessonId,
      "comments",
      user.uid
    );

    const noteQuery = query(
      commentsRef,
      where("comments", "array-contains", {
        id: selectedNote.id,
        noteText: selectedNote.noteText,
        noteTitle: selectedNote.noteTitle,
        timeStamp: selectedNote.timeStamp,
      })
    );

    // TODO: zamienić tablicę komentarzy na obiekty

    console.log(noteQuery);

    // await updateDoc(noteQuery, { comments: arrayUnion(currentNoteData) });

    // // search for a selected Note and change its value to current
    // comments.forEach((comment, index) => {
    //   if (comment.id == selectedNote.noteId) {
    //     let Note = comments[index];

    //     comments[index] = { ...Note, ...currentNoteData };
    //   }
    // });

    setModalProps((prevState) => {
      return { ...prevState, isEditNoteOpen: false };
    });
  };

  return (
    <div className={styles.modal_container}>
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
  );
}
