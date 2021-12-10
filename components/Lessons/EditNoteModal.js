import styles from "./NoteModal.module.scss";

export default function EditNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
  comments,
  setModalProps,
  selectedNote
}) {
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
