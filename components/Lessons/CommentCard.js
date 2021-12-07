import styles from "./CommentCard.module.scss";

export default function CommentCard({ id, timeStamp, noteTitle, noteText }) {
  return (
    <div className={styles.note__item}>
      <div className={styles.timestamp_container}>
        <p>{timeStamp}</p>
      </div>
      <div className={styles.note_container}>
        <div className={styles.note_bar}>
          <p>{`${noteTitle} | ${id}`}</p>
          <div className={styles.options_container}>
            <img src="/icons/edit.svg" />
            <img src="/icons/delete.svg" />
          </div>
        </div>
        <div className={styles.text_container}>{noteText}</div>
      </div>
    </div>
  );
}
