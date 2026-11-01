export type Tweet = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export type TweetsResponse = {
  posts: Tweet[];
  total: number;
  skip: number;
  limit: number;
};
