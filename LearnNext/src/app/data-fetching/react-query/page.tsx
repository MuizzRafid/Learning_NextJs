"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostResponse {
  posts: Post[];
  total: number;
}
function ReactQueryExample() {
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery<PostResponse>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("failed to fetch Posts");
      }
      return response.json();
    },
    staleTime: 2 * 60 * 1000,
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>
      <h1>React Query Example</h1>
      <div className="flex flex-col gap-2">
        {data?.posts?.map((post) => (
          <div key={post.id}>
            <h1 className="p-4 text-xl">Title: {post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactQueryExample;
