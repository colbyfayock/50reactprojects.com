import Head from 'next/head'
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
              <input type="email" name="email_address" placeholder="Email Address" />
              <button>Get It Free</button>
            </form>

          </div>

        </section>

        <section className={styles.section}>
          <div  className={styles.container}>

            <h2>Don&apos;t Ask &quot;What to Build&quot;</h2>

            <p className={styles.subhead}>
              Dive in with 50 projects complete with project briefs and wireframes!
            </p>

          </div>
        </section>

        <section className={styles.section} data-background-color="blue">
          <div className={styles.container}>

            <h2>Learn by Doing</h2>

            <p>
              One of the best ways to learn is by doing the work. Choose from
              8 project categories and get started right away.
            </p>

            <ul className={styles.topics}>
              <li>Business &amp; Real-World</li>
              <li>Personal &amp; Portfolio</li>
              <li>Games &amp; Puzzles</li>
              <li>Project Add-Ons</li>
              <li>Fun &amp; Interesting</li>
              <li>Productivity</li>
              <li>Tools &amp; Libraries</li>
              <li>Clones</li>
            </ul>

            <p className={styles.subhead}>
              Keep building and level up!
            </p>

          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>

            <h2>Start Doing Now</h2>

            <p>
              Get these projects right to your inbox for <strong>FREE</strong>!
            </p>

            <form className={styles.form} data-theme="light" action="https://app.convertkit.com/forms/1539376/subscriptions" method="post">
              <input type="hidden" name="tags[]" value="1749930" />
              <input type="email" name="email_address" placeholder="Email Address" />
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
