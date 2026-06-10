import { useState } from "react";

// Define the shape of a single post object returned by the API.
// This gives TypeScript strong typing for the `posts` state.
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
  // useState is used to store the post list in component state.
  // Initially the array is empty until the user clicks the button.
  const [posts, setPosts] = useState<Post[]>([]);

  // This asynchronous function fetches the posts from the external API.
  // It waits for the network request and then parses the JSON response.
  // Finally, it updates the component state with the fetched data.
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  };

  return (
    <div className="container">
      {/* Header explaining the purpose of this component. */}
      <h2 className="text-warning mb-4 text-center">Post List Component</h2>

      {/* Clicking this button triggers the API request. */}
      <button className="btn btn-info mb-3" onClick={fetchPosts}>
        Fetch Posts
      </button>

      {/* Render the list of posts. Each post is displayed with a title and body. */}
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {/* The post title is highlighted in a warning color. */}
            <h4 className="text-warning">{post.title}</h4>
            {/* The post body is shown below the title in muted text. */}
            <p className="text-muted">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
