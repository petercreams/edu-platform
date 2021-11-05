import styles from "./Backdrop.module.scss"

export default function Backdrop({ children }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <hr className={styles.marginLeft}></hr>

          {children}

          <hr className={styles.marginRight}></hr>
        </div>
      </div>
    </div>
  );
}
