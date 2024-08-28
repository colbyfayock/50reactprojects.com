const twitterTweetIntent = 'https://twitter.com/intent/tweet';

export function createTweetAction({ message = [], }: { message?: Array<string> } = {}) {
  const tweetMessage = message.map(m => encodeURIComponent(m)).join('%0A');
  return `${twitterTweetIntent}?text=${tweetMessage}`;
}

export function openTweet({ message }: { message: string }) {
  window.open(message, 'share-twitter', 'width=550, height=235');
}