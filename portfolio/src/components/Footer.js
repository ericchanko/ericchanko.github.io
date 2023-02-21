import styles from "@/styles/Home.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <span>Socials & Resume</span>
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
            <a href="./EricChang_2023_SWE_Resume.pdf">
              <button className={styles.button}>
                Resume - SWE
              </button>
            </a>
             <a href="./Eric_Chang_2023_DataAnalyst_Resume.pdf">
              <button className={styles.button}>
                Resume - Data Analyst
              </button>
            </a>
            <span className={styles.copyright}>
                {/*© 2023 Eric Chang. Crafted and designed by me :)*/}
            </span>
        </div>
    )
}