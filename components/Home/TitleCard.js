import styles from "./TitleCard.module.scss";

export default function TitleCard(props) {
  return (
    <div>
      <div className={styles.title_container}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
