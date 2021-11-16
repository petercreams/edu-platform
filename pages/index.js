import Head from "next/head";
import Backdrop from "../components/Home/Backdrop";
import CardContact from "../components/Home/CardContact";
import CardInfo from "../components/Home/CardInfo";
import CardReferences from "../components/Home/CardReferences";
import CardTeacher from "../components/Home/CardTeacher";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import PaperContainer from "../components/Home/PaperContainer";
import TitleCard from "../components/Home/TitleCard";
import TitleReferences from "../components/Home/TitleReferences";
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
            <section id={"about"} className={styles.about}>
              <div className={styles.title1_container}>
                <TitleCard title={"How it works?"} />
              </div>
              <div className={styles.cardInfo_container}>
                <CardInfo
                  title={"1."}
                  text={"Check our offer and choose your course"}
                  design={"about"}
                />
                <CardInfo
                  title={"2."}
                  text={"Call us or send us the form"}
                  design={"about"}
                />
                <CardInfo
                  title={"3."}
                  text={"Enjoy a course with your teacher"}
                  design={"about"}
                />
              </div>
            </section>
            <section id={"courses"} className={styles.courses}>
              <div className={styles.title2_container}>
                <TitleCard title={"Courses"} />
              </div>
              <div className={styles.cardCourses_container}>
                <CardInfo
                  title={"#Math"}
                  text={"Check our in-depth math course for 8th grades"}
                  design={"courses"}
                />
                <CardInfo
                  title={"#Physics"}
                  text={"Coming soon..."}
                  design={"courses"}
                />
                <CardInfo
                  title={"#IT"}
                  text={"Coming soon..."}
                  design={"courses"}
                />
              </div>
            </section>
            <section id={"teachers"} className={styles.teachers}>
              <div className={styles.title3_container}>
                <TitleCard title={"Meet our teachers!"} />
              </div>
              <div className={styles.cardTeachers_container}>
                <CardTeacher
                  img={"/teachers/teacher1.jpg"}
                  name={"Piotr Śmietanka"}
                  info1={"Mechatronics engineer"}
                  info2={"Passionate about teaching"}
                  info3={"Acting and singing lover"}
                  skills={"#math #physics #it"}
                  design={"normal"}
                />
                <CardTeacher
                  img={"/teachers/teacher1.jpg"}
                  name={"Piotr Śmietanka"}
                  info1={"Mechatronics engineer"}
                  info2={"Passionate about teaching"}
                  info3={"Acting and singing lover"}
                  skills={"#math #physics #it"}
                  design={"reverse"}
                />
              </div>
            </section>
            <section id={"references"} className={styles.references}>
              <div className={styles.referencesTitle_container}>
                <TitleReferences />
              </div>

              <div className={styles.references_container}>
                <div className={styles.references_items}>
                  <div className={styles.references_items_left}>
                    <CardReferences
                      img={"/teachers/teacher1.jpg"}
                      name={"Piotr Śmietanka"}
                      nickname={"peter_creams"}
                      comment={"Awesome math course. Really impresive stuff!"}
                    />
                  </div>

                  <div className={styles.references_items_right}>
                    <CardReferences
                      img={"/teachers/teacher1.jpg"}
                      name={"Piotr Śmietanka"}
                      nickname={"peter_creams"}
                      comment={"This is incredible work. Amazing job, MathX!"}
                    />
                  </div>

                  <div className={styles.references_items_left}>
                    <CardReferences
                      img={"/teachers/teacher1.jpg"}
                      name={"Piotr Śmietanka"}
                      nickname={"peter_creams"}
                      comment={"I find MathX the best learning platform!"}
                    />
                  </div>

                  <div className={styles.references_items_right}>
                    <CardReferences
                      img={"/teachers/teacher1.jpg"}
                      name={"Piotr Śmietanka"}
                      nickname={"peter_creams"}
                      comment={
                        "Affordable, clean, very friendly, awesome app. I just love MathX!"
                      }
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className={styles.contact}>
              <div className={styles.title5_container}>
                <TitleCard title={"Contact us"} />
              </div>
              <div className={styles.form_container}>
                <CardContact />
              </div>
            </section>

            <footer>
              <div className={styles.footer_container}>
                <Footer />
              </div>
            </footer>
          </PaperContainer>
        </Backdrop>
      </main>
    </div>
  );
}
