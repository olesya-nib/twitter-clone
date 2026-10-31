import { Suspense } from "react";

type TweetPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function TweetContent({ params }: TweetPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Tweet {id}</h1>
    </div>
  );
}

export default function TweetPage({ params }: TweetPageProps) {
  return (
    <Suspense fallback={<p>Loading tweet...</p>}>
      <TweetContent params={params} />
    </Suspense>
  );
}
