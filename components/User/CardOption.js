import styles from "./CardOption.module.scss";
import Link from "next/dist/client/link";

export default function CardOption(props) {
  return (
    <Link href={props.link}>
    <div className={styles.optionCard}>
        <div className={styles.icon_container}>
          <img src={props.icon} />
        </div>
        <h2>{props.text}</h2>
        <div className={styles.arrow_container}>
          <img src="/icons/arrow.svg" />
        </div>
      </div>  
    </Link>
  );
}
