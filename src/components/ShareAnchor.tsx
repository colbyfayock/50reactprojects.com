"use client";

import { usePlausible } from 'next-plausible';

import { createTweetAction, openTweet } from '../lib/social';

import Section from '@/components/Section';
import Container from '@/components/Container';
import Button from '@/components/Button';

const twitterAction = createTweetAction({
  message: [
    `🤔 Need a new project idea?\n\n💥 Get this FREE ebook from @colbyfayock\n\n⚛️ 50 Projects for #ReactJS & the Static Web\n\n🔥 It’s packed with project briefs, layout ideas, and resources to get started\n\n#50reactprojects\n\n👉 https://50reactprojects.com`
  ]
});

interface ShareAnchorProps extends React.ComponentProps<'div'> {
  backgroundColor?: string;
}

const ShareAnchor = ({ children, backgroundColor = 'blue' }: ShareAnchorProps) => {
  const plausible = usePlausible();

  /**
   * handleOnTwitterClick
   */

  function handleOnTwitterClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    plausible('share-twitter');
    openTweet({
      message: twitterAction
    })
  }

  return (
    <Section backgroundColor={backgroundColor} spacing="compact">
      <Container className="flex items-center justify-center flex-col md:flex-row gap-6">
        { children || <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center m-0">Love 50 React Projects?</h3> }
        <p className="flex justify-center">
          <Button onClick={handleOnTwitterClick} className="bg-blue-50 text-brand-blue-medium hover:bg-white border-white transition-colors duration-200 ease-in-out">
            Share on Twitter
          </Button>
        </p>
      </Container>
    </Section>
  )
}

export default ShareAnchor;