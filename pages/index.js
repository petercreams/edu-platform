import Head from "next/head";
import Backdrop from "../components/Home/Backdrop";
import Navbar from "../components/Home/Navbar";
import Top from "../components/Home/Top";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MathX - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Top />
        <Backdrop>
          <div className={styles.title1}>
            <p className={styles.hello}>How it works?</p>
          </div>
        </Backdrop>
      </main>
    </div>
  );
}
