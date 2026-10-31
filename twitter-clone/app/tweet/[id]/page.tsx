type TweetPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TweetPage({ params }: TweetPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Tweet {id}</h1>
    </div>
  );
}
