import Head from "next/head";
import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MathX - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.gridContainer}>
            <hr className={styles.marginLeft}></hr>
            <div className={styles.title1}>
              <p className={styles.hello}>How it works?</p>
            </div>

            <hr className={styles.marginRight}></hr>
          </div>
        </div>
      </main>

    </div>
  );
}
