import styles from "./CommentCard.module.scss";

export default function CommentCard({
  id,
  timeStamp,
  noteTitle,
  noteText,
  openDeleteNote,
  openEditNote,
  playVideoAt,
  sToTime,
}) {
  return (
    <div className={styles.note__item}>
      <div className={styles.timestamp_container}>
        <p onClick={() => playVideoAt(timeStamp)}>{sToTime(timeStamp)}</p>
      </div>
      <div className={styles.note_container}>
        <div className={styles.note_bar}>
          <p>{noteTitle}</p>
          <div className={styles.options_container}>
            <img onClick={() => openEditNote(id)} src="/icons/edit.svg" />
            <img onClick={() => openDeleteNote(id)} src="/icons/delete.svg" />
          </div>
        </div>
        <div className={styles.text_container}>{noteText}</div>
      </div>
    </div>
  );
}
