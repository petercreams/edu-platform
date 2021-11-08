import styles from "./CardTeacher.module.scss";
import { useState, useEffect } from "react";

export default function CardTeacher(props) {
  const [isNormal, setIsNormal] = useState(true);

  // render different design according to design prop
  useEffect(() => {
    props.design == "reverse" && setIsNormal(false);
  }, []);

  return (
    <div className={styles.card_container}>
      <div
        style={isNormal ? { order: "0" } : { order: "1" }}
        className={styles.img_container}
      >
        <img src={props.img}></img>
      </div>
      <div
        style={isNormal ? { order: "1" } : { order: "0" }}
        className={styles.text_container}
      >
        <div className={styles.name_container}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.description_container}>
          <ul>
            <li>{props.info1}</li>
            <li>{props.info2}</li>
            <li>{props.info3}</li>
          </ul>
        </div>
        <div
          style={
            isNormal
              ? { justifyContent: "flex-end" }
              : { justifyContent: "flex-start" }
          }
          className={styles.skills_container}
        >
          <h5>{props.skills}</h5>
        </div>
      </div>
    </div>
  );
}
