import styles from "./NoteModal.module.scss";

import { db } from "../../firebase-client/clientApp";

import { doc, updateDoc } from "firebase/firestore";

export default function EditNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
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
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    };

    const editedNoteRef = doc(
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
      selectedNote.id
    );

    await updateDoc(editedNoteRef, currentNoteData);

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
