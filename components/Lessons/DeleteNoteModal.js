import styles from "./NoteModal.module.scss";

import { db } from "../../firebase-client/clientApp";

import { doc, deleteDoc } from "firebase/firestore";

export default function DeleteNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
  setModalProps,
  selectedNote,
  user,
}) {
  const deleteNoteHandler = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const lessonId = queryParams.get("lesson");
    const sectionNum = queryParams.get("section");
    const courseName = queryParams.get("course");

    // set current note data
    const currentNoteData = {
      id: selectedNote.id,
      noteTitle: noteTitle.current.value,
      noteText: noteText.current.value,
    };

    const deletedNoteRef = doc(
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
    await deleteDoc(deletedNoteRef);

    setModalProps((prevState) => {
      return { ...prevState, isDeleteNoteOpen: false };
    });
  };

  return (
    <div className={styles.modal_container}>
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
  );
}
