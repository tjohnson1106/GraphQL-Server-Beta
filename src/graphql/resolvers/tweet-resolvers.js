import Tweet from "../../models/Tweet";
import { requireAuth } from "../../services/auth";

export default {
  getTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findById(_id);
    } catch (error) {
      throw error;
    }
  },
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create({ ...args, user: user.id });
    } catch (error) {
      throw error;
    }
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user.id });

      if (!tweet) {
        throw new Error("Not found!");
      }

      Object.entries(rest).forEach(([key, value]) => {
        tweet[key] = value;
      });

      return Tweet.save();
    } catch (error) {
      throw error;
    }
  },
  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user.id });

      await Tweet.remove;
      return {
        message: "Delete Success!"
      };
    } catch (error) {
      throw error;
    }
  }
};
