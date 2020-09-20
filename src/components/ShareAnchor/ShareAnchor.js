import ClassName from 'models/classname';
import { createTweetAction, openTweet } from '../../lib/social';

import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

import styles from './ShareAnchor.module.scss';

const twitterAction = createTweetAction({
  message: [
    `🤔 Need a new project idea?\n\n💥 Get this FREE ebook from @colbyfayock\n\n⚛️ 50 Projects for #ReactJS & the Static Web\n\n🔥 It’s packed with project briefs, layout ideas, and resources to get started\n\n#50reactprojects\n\n👉 https://50reactprojects.com`
  ]
});

const ShareAnchor = ({ children, className, backgroundColor = 'blue' }) => {
  const shareAnchorClassName = new ClassName(styles.shareAnchor);

  shareAnchorClassName.addIf(className, className);

  /**
   * handleOnTwitterClick
   */

  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
      message: twitterAction
    })
  }

  return (
    <Section className={shareAnchorClassName.toString()} backgroundColor={backgroundColor}>
      <Container className={styles.shareAnchorContainer}>
        { children || <h3>Love 50 React Projects?</h3> }
        <p className={styles.shareAnchorActions}>
          <Button onClick={handleOnTwitterClick}>Share on Twitter</Button>
        </p>
      </Container>
    </Section>
  )
}

export default ShareAnchor;