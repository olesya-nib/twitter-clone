"use client";
import { useEffect, useState } from "react";

type Tweet = {
  id: number;
  user: string;
  content: string;
  timestamp: string;
};

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    async function fetchTweets() {
      const res = await fetch("/api/tweets");
      const data = await res.json();
      setTweets(data);
    }
    fetchTweets();
  }, []);

  return (
    <div>
      <h1>Latest Tweets</h1>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>
            <strong>{tweet.user}</strong>: {tweet.content}
          </p>
          <small>{tweet.timestamp}</small>
        </div>
      ))}
    </div>
  );
}
