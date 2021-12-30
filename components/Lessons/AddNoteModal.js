import styles from "./NoteModal.module.scss";

import {
  arrayUnion,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  Timestamp,
  collection,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase-client/clientApp";

export default function AddNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
  videoProps,
  setModalProps,
  user,
}) {
  const addNoteHandler = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const lessonId = queryParams.get("lesson");
    const sectionNum = queryParams.get("section");
    const courseName = queryParams.get("course");

    const noteId = Math.random().toString(36).substr(2, 12);

    const addedNoteRef = doc(
      db,
      "courses",
      courseName,
      "sections",
      sectionNum,
      "lessons",
      lessonId,
      "comments",
      user.uid,
      "comments",
      noteId
    );

    await setDoc(addedNoteRef, {
      id: noteId,
      timeStamp: parseInt(videoProps.currentTime),
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    });

    setModalProps((prevState) => {
      return { ...prevState, isAddNoteOpen: false };
    });
  };

  return (
    <div className={styles.modal_container}>
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
  );
}
