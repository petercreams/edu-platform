import styles from "./PaperContainer.module.scss";

export default function PaperContainer({ children }) {
  return (
    <div className={styles.paperContainer}>

      {children}

    </div>
  );
}
