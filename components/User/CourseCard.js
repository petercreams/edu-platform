import styles from "./CourseCard.module.scss";

import { useRouter } from 'next/router'

export default function CourseCard(props) {
    const router = useRouter()

  return (
    <div onClick={() => router.push(`/user/courses/${props.id}`)} className={styles.course__item}>
      <div className={styles.img_container}>
        <img src={props.img} />
      </div>
      <div className={styles.title_container}>
        <p>{props.name}</p>
        <p id={styles.author}>By {props.author}</p>
      </div>
    </div>
  );
}
