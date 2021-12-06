import styles from "./CourseCard.module.scss";

import { useRouter } from 'next/router'

export default function CourseCard({id, img, name, author}) {
    const router = useRouter()

  return (
    <div onClick={() => router.push(`/user/courses/${id}`)} className={styles.course__item}>
      <div className={styles.img_container}>
        <img src={img} />
      </div>
      <div className={styles.title_container}>
        <p>{name}</p>
        <p id={styles.author}>By {author}</p>
      </div>
    </div>
  );
}

