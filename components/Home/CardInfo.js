import styles from "./CardInfo.module.scss";
import { useState, useEffect } from "react";

export default function CardInfo(props) {
  const [isCourse, setIsCourse] = useState(false);

  // render different font-size if courses card
  useEffect(() => {
    props.design == "courses" && setIsCourse(true);
  }, []);

  return (
    <div>
      <div className={styles.card_container}>
        <div className={styles.title_container}>
          <h3 style={isCourse ? { fontSize: "3.5rem" } : null}>{props.title}</h3>
        </div>
        <div className={styles.text_container}>
        <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
