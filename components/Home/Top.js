import styles from "./Top.module.scss";

export default function Top(params) {
  return (
    <section className={styles.top_container}>
      <div className={styles.top_container_elem}>
        <div className={styles.title_container}>
          <h1>Learn with your Teacher Easily with MathX.</h1>
          <h3>Best solution to manage your learning easily and friendly.</h3>
        </div>
        <div className={styles.top_frame}>
          <img
            src="/illustrations/undraw_road_to_knowledge_m8s0.svg"
            alt="Photo"
          ></img>
        </div>
      </div>

      <span className={styles.background_figure1}>
        <img src="/backdrop/shapes/eli.png"></img>
      </span>
      <span className={styles.background_figure2}>
        <img src="/backdrop/shapes/rec.png"></img>
      </span>
      <span className={styles.background_figure3}>
        <img src="/backdrop/shapes/star.png"></img>
      </span>
      <span className={styles.background_figure4}>
        <img src="/backdrop/shapes/tri.png"></img>
      </span>
      <span className={styles.background_caption1}></span>
      <span className={styles.background_caption2}></span>
      <span className={styles.background_caption3}></span>
      <span className={styles.background_caption4}></span>
    </section>
  );
}
