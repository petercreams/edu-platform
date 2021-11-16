import styles from "./Top.module.scss";

export default function Top(params) {
  return (
    <section className={styles.top_container}>
      <div className={styles.top_container_elem}>
        <div className={styles.title_container}>
          <h1>Learn with your teacher</h1>
          <h1>Easily with MathX.</h1>
          <h3>Best solution to manage your learning easily and friendly.</h3>
        </div>
        <div className={styles.top_frame}>
          <img
            src="/illustrations/undraw_road_to_knowledge_m8s0.svg"
            alt="user-panel-img"
          ></img>
        </div>
      </div>

      <div className={styles.background_figure1}></div>
      <span className={styles.background_figure2}></span>
      <span className={styles.background_figure3}></span>
      <span className={styles.background_figure4}></span>
      <span className={styles.background_caption1}></span>
      <span className={styles.background_caption2}></span>
      <span className={styles.background_caption3}></span>
      <span className={styles.background_caption4}></span>
    </section>
  );
}
