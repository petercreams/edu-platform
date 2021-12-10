import styles from "./NoteModal.module.scss";

export default function AddNoteModal({
  noteText,
  noteTitle,
  sToTime,
  closeHandler,
  videoProps,
  comments,
  setModalProps
}) {
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
