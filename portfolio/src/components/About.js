import React from "react";
import styles from "@/styles/About.module.css"

function About() {
    return (
        <section className={(styles.about)}>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.text}>
            ERIC CHANG
            <br />
            <span>Software Developer</span>
          </div>
          <div className={styles.text}>
            Socials
          </div>
          <div className={styles.text}>
            <a href="https://github.com/ericchanko">
              <img
                className={styles.social}
                src="https://img.shields.io/badge/github-%2324292f.svg?&style=for-the-badge&logo=github&logoColor=white"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/echanko/">
              <img
                className={styles.social}
                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                alt="linkedin"
              />
            </a>
          </div>
          <div className={styles.text}>
            <a href="./EricChang_2023_SWE_Resume.pdf">
              <button className={styles.button}>
                Resume - SWE
              </button>
            </a>
            <br />
             <a href="./Eric_Chang_2023_DataAnalyst_Resume.pdf">
              <button className={styles.button}>
                Resume - Data Analyst
              </button>
            </a>
          </div>
        </div>
        <div className={styles.preview}>
          <img
            className={styles.pic}
            src={"/vercel.svg"}
            alt=""
          />
        </div>
      </div>
    </section>
    )
}

export default About

