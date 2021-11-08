import styles from "./CardReferences.module.scss";

export default function CardReferences(props) {
  return (
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img src={props.img}></img>
      </div>
      <div className={styles.text_container}>
        <div className={styles.name_container}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.nickname_container}>
          <h4>{"@"+props.nickname}</h4>
        </div>
        <div className={styles.comment_container}>
          <h5>{props.comment}</h5>
        </div>
      </div>
    </div>
  );
}
