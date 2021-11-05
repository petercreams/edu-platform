import styles from "./Backdrop.module.scss";

export default function Backdrop({ children }) {
  return <div className={styles.container}>{children}</div>;
}
