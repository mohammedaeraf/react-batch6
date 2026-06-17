import { useState } from "react";

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

  // `error` stores a friendly error message when fetching fails.
  // A null value means there is no error and the normal UI is shown.
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from the example JSONPlaceholder API.
  // The function is async so `await` can be used for the network request
  // and the JSON decoding step.
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      // `response.ok` is true for success response.
      // If the response is not successful, throw an error so the catch block
      // can handle it and show a friendly message to the user.
      if (!response.ok) {
        throw new Error("Error occurred while fetching data from the API.");
      }

      const data: Post[] = await response.json();

      // Update state with the posts returned by the API.
      setPosts(data);
      setError(null);
    } catch (err: any) {
      // Save the error text so the component can render an error state.
      setError(err.message);
      console.error(err);
    }
  };

  if (error) {
    return (
      <div className="container text-center">
        <h3 className="text-danger">Unable to Load Data</h3>
        <p className="text-muted">
          Something went wrong while fetching the data. Please try again later.
        </p>
        <button className="btn btn-primary" onClick={fetchPosts}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header explaining the purpose of this component. */}
      <h2 className="text-warning mb-4 text-center">Post List Component</h2>

      {/* Button click triggers fetching posts from the API. */}
      <button className="btn btn-info mb-3" onClick={fetchPosts}>
        Fetch Posts
      </button>

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
