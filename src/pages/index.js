import Head from 'next/head'
import {
  FaBriefcase,
  FaAddressBook,
  FaPuzzlePiece,
  FaProjectDiagram,
  FaFlask,
  FaLeaf,
  FaTools,
  FaRegClone
} from 'react-icons/fa';

import styles from '../styles/Home.module.css'

import LogoReact from '../components/LogoReact';

export default function Home() {
  return (
    <>
      <Head>
        <title>50 React Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className={styles.section} data-background-color="blue-dark">

          <div className={styles.hero}>

            <h1 className={styles.title}>
              <strong>50 React Projects</strong>
              <span>For React &amp; The Static Web</span>
            </h1>

            <p className={styles.logo}>
              <LogoReact />
            </p>

            <form className={styles.form} action="https://app.convertkit.com/forms/1539376/subscriptions" method="post">
              <p>
                Get the <strong>FREE EBOOK</strong> straight to your inbox!
              </p>
              <input type="hidden" name="tags[]" value="1749930" />
              <label className={styles.sronly} htmlFor="email">Email Address</label>
              <input type="email" name="email_address" placeholder="Email Address" />
              <button>Get It Free</button>
            </form>

          </div>

        </section>

        <section id={styles.preview} className={styles.section}>
          <div className={styles.container}>

            <h2>Don&apos;t Ask &quot;What to Build&quot;</h2>

            <p className={styles.subhead}>
              Dive in with <strong>50 projects</strong> complete
              with <strong className={styles.blue}>project briefs</strong> and <strong className={styles.purple}>wireframes</strong>!
            </p>

            <img src="/images/50-react-projects-business-real-world-ecommerce-store.png" alt="" />

          </div>
        </section>

        <section className={styles.section} data-background-color="blue">
          <div className={styles.container}>

            <h2>Learn by Doing</h2>

            <p>
              One of the best ways to learn is by <strong>doing the work</strong>. Choose
              from <strong>8 project categories</strong> and get started right away.
            </p>

            <div className={styles.topics}>
              <ul>
                <li>
                  <span><FaBriefcase /></span>
                  Business &amp; Real-World
                </li>
                <li>
                  <span><FaAddressBook /></span>
                  Personal &amp; Portfolio
                </li>
                <li>
                  <span><FaPuzzlePiece /></span>
                  Games &amp; Puzzles
                </li>
                <li>
                  <span><FaProjectDiagram /></span>
                  Project Add-Ons
                </li>
                <li>
                  <span><FaFlask /></span>
                  Fun &amp; Interesting
                </li>
                <li>
                  <span><FaLeaf /></span>
                  Productivity
                </li>
                <li>
                  <span><FaTools /></span>
                  Tools &amp; Libraries
                </li>
                <li>
                  <span><FaRegClone /></span>
                  Clones
                </li>
              </ul>
            </div>

            <p className={styles.subhead}>
              Keep building and <strong>level up</strong>!
            </p>

          </div>
        </section>

        <section id={styles.start} className={styles.section}>
          <div className={styles.container}>

            <h2>Start Doing Now</h2>

            <p className={styles.subhead}>
              Get these projects right to your inbox for <strong>FREE</strong>!
            </p>

            <form className={styles.form} data-theme="light" action="https://app.convertkit.com/forms/1539376/subscriptions" method="post">
              <input type="hidden" name="tags[]" value="1749930" />
              <label className={styles.sronly} htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email_address" placeholder="Email Address" />
              <button>Get It Free</button>
            </form>

          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            &copy; { new Date().getFullYear() }, <a href="https://twitter.com/colbyfayock">Colby Fayock</a>
          </p>
        </div>
      </footer>
    </>
  )
}
