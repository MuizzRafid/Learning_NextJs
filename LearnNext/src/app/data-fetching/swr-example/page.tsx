"use client";
import { Key } from "react";
import useSWR from "swr";
import { revalidateEvents } from "swr/_internal";

interface CommentI {
  id: number;
  body: string;
  postId: number;
  likes: number;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SwrExample() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://dummyjson.com/comments",
    fetcher,
    {
      revalidateOnFocus: true,
      refreshInterval: 30000,
      errorRetryCount: 3,
    },
  );

  function handleRefresh() {
    mutate();
  }

  console.log(data, " error ", error);
  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <h1>Loading ....</h1>;
  return (
    <div>
      <h1>SWR Example</h1>
      <button onClick={handleRefresh}>Refresh</button>
      <div className="flex flex-col gap-2">
        {data?.comments?.map((comment: CommentI) => (
          <div
            className="flex flex-row w-full justify-between m-auto p-4"
            key={comment.id}
          >
            <h1>{comment.body}</h1>
            <h3>{comment.postId}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwrExample;
