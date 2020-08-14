import styles from './Footer.module.scss';

import { createTweetAction, openTweet } from '../../lib/social';

import Section from '../Section';
import Container from '../Container';

const Footer = () => {
  const twitterAction = createTweetAction({
    message: [
      `🤔 Need a new project idea?\n\n💥 Get this FREE ebook from @colbyfayock\n\n⚛️ 50 Projects for #ReactJS & the Static Web\n\n🔥 It’s packed with project briefs, layout ideas, and resources to get started\n\n#50reactprojects\n\n👉 https://50reactprojects.com`
    ]
  });

  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
        message: twitterAction
    })
  }

  return (
    <>
      <Section id={styles.start} backgroundColor="blue-dark">
        <Container>

          <h2 className={styles.shareheader}>Love this ebook?</h2>

          <p className={styles.subhead}>
            Share it with everyone you know!
          </p>

          <p>
            <button className={styles.sharebutton} onClick={handleOnTwitterClick}>Share on Twitter</button>
          </p>
        </Container>
      </Section>

      <footer className={styles.footer}>
        <Container>
          <h3 className={styles.footerheader}>Support this project on GitHub!</h3>
          <iframe className={styles.sponsor} src="https://github.com/sponsors/colbyfayock/button" title="Sponsor colbyfayock" height="35" width="116" style={{ border: 'none' }} />
          <p className={styles.copyright}>
            &copy; { new Date().getFullYear() }, <a href="https://twitter.com/colbyfayock">Colby Fayock</a>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Footer;