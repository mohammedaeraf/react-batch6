import { useState } from "react";

// Define the shape of a post object returned by the API.
// Using a TypeScript type helps catch errors when working with posts.
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostsTable() {
  // State to store the list of posts fetched from the API.
  const [posts, setPosts] = useState<Post[]>([]);

  // Async function to fetch posts when the button is clicked.
  let fetchPosts = async () => {
    // Call the JSONPlaceholder API for fake post data.
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Parse the response body as JSON.
    let postsData = await response.json();

    // Update state so the component re-renders with the fetched posts.
    setPosts(postsData);
  };

  return (
    <div className="p-3">
      <h2 className="mb-4 text-info">List of Posts</h2>
      <button className="btn btn-info my-3" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <table className="table table-bordered table-striped table-hover">
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PostsTable;
