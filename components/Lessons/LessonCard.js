import styles from "./LessonCard.module.scss";
import { useRouter } from "next/router";

export default function LessonCard(props) {
  const router = useRouter();
  const {pid} = router.query;

  return (
    <div
      onClick={() => router.push(`${window.location.href}/${props.id}/?lesson=${props.id}&section=${props.sectionNum}&course=${props.course}`)}
      className={styles.lesson__item}
    >
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
