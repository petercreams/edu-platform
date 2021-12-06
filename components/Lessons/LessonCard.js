import styles from "./LessonCard.module.scss";

export default function LessonCard(props) {
  return (
    <div className={styles.lesson__item}>
      <div className={styles.lesson__id}>
        <span>{props.number}</span>
      </div>
      <div className={styles.lesson__data}>
        <p>{`Section ${props.sectionNum} - ${props.sectionName}`}</p>
        <p id={styles.lesson_subject}>{props.subject}</p>
      </div>
    </div>
  );
}
