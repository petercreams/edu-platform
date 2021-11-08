import styles from "./TitleReferences.module.scss";

export default function TitleReferences(params) {
  return (
    <div className={styles.references_container}>
      <div className={styles.img_container}>
        <img src={"/illustrations/undraw_graduation.svg"} />
      </div>
      <div className={styles.references_bar_container}>
        <div className={styles.title_container}>
          <h2>What people say about us</h2>
        </div>
        <div className={styles.button_container}>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}
