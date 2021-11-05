import styles from "./CardInfo.module.scss";

export default function CardInfo(props) {
  return (
    <div>
      <div className={styles.card_container}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
