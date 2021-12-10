import styles from "./CommentCard.module.scss";

export default function CommentCard({ id, timeStamp, noteTitle, noteText, openDeleteNote, openEditNote }) {
  return (
    <div className={styles.note__item}>
      <div className={styles.timestamp_container}>
        <p>{timeStamp}</p>
      </div>
      <div className={styles.note_container}>
        <div className={styles.note_bar}>
          <p>{`${noteTitle} | ${id}`}</p>
          <div className={styles.options_container}>
            <img onClick={() => openEditNote(id)}src="/icons/edit.svg" />
            <img onClick={() => openDeleteNote(id)} src="/icons/delete.svg" />
          </div>
        </div>
        <div className={styles.text_container}>{noteText}</div>
      </div>
    </div>
  );
}
