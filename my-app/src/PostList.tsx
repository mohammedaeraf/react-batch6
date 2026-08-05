import { useEffect, useState } from "react";

// Define the shape of a single post object returned by the API.
// This gives TypeScript strong typing for the `posts` state and helps
// ensure we only access valid post fields in the component.
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
  // `posts` stores the fetched list of posts.
  // Starts as an empty array and gets populated after a successful fetch.
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from the example JSONPlaceholder API.
  // The function is async so `await` can be used for the network request
  // and the JSON decoding step.
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data: Post[] = await response.json();

    // Update state with the posts returned by the API.
    setPosts(data);
  };

  // To call a function when component loads/mounts
  useEffect(() => {
    fetchPosts();
  }, []);
  // blank array means it will load once on component load

  return (
    <div className="container">
      {/* Header explaining the purpose of this component. */}
      <h2 className="text-warning mb-4 text-center">Post List Component</h2>

      {/* Render the list of posts. If the list is empty, nothing is shown yet. */}
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {/* Display the post title and body for each fetched item. */}
            <h4 className="text-warning">{post.title}</h4>
            <p className="text-muted">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
