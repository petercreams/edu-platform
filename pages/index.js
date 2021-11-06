import Head from "next/head";
import Backdrop from "../components/Home/Backdrop";
import CardInfo from "../components/Home/CardInfo";
import Navbar from "../components/Home/Navbar";
import PaperContainer from "../components/Home/PaperContainer";
import TitleCard from "../components/Home/TitleCard";
import Top from "../components/Home/Top";

import styles from "../styles/index.module.scss";

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
          <PaperContainer>
            <section className={styles.about}>
              <div className={styles.title1_container}>
                <TitleCard title={"How it works?"}/>
              </div>
              <div className={styles.cardInfo_container}>
                <CardInfo
                  title={"1."}
                  text={"Check our offer and choose your course"}
                  design={"about"}
                />
                <CardInfo title={"2."} text={"Call us or send us the form"} design={"about"} />
                <CardInfo
                  title={"3."}
                  text={"Enjoy a course with your teacher"}
                  design={"about"}
                />
              </div>
            </section>
            <section className={styles.courses}>
            <div className={styles.title2_container}>
                <TitleCard title={"Courses"}/>
              </div>
              <div className={styles.cardCourses_container}>
                <CardInfo
                  title={"#Math"}
                  text={"Check our in-depth math course for 8th grades"}
                  design={"courses"}
                />
                <CardInfo title={"#Physics"} text={"Coming soon..."} design={"courses"} />
                <CardInfo
                  title={"#IT"}
                  text={"Coming soon..."}
                  design={"courses"}
                />
              </div>
            </section>
          </PaperContainer>

        </Backdrop>
      </main>
    </div>
  );
}
