import TweetCard from "@/components/TweetCard";
import type { TweetsResponse } from "@/types/tweet";

async function getTweets(): Promise<TweetsResponse> {
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) throw new Error("Failed to fetch tweets");
  return res.json();
}

export default async function HomePage() {
  const tweets = await getTweets();

  return (
    <main>
      <h1 className="mb-4 text-lg font-bold text-white">📝 Latest Tweets</h1>
      <div className="flex flex-col gap-3">
        {tweets.posts.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </main>
  );
}
