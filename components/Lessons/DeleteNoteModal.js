import styles from "./NoteModal.module.scss";

export default function DeleteNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
  comments,
  setModalProps,
  selectedNote,
}) {
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
