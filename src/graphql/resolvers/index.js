import TweetResolvers from './tweet-resolvers';

export default {
  Query: {
    getTweets: TweetResolvers.getTweets,
    getTweet: TweetResolvers.getTweet,
  },

  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet
  },
};
