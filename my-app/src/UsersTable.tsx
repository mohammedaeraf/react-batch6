import { useState } from "react";

// Define the shape of a post object returned by the API.
// Using a TypeScript type helps catch errors when working with posts.
type User = {
  id: number;
  name: string;
  email: number;
  phone: string;
  website: string;
};

function UsersTable() {
  // State to store the list of posts fetched from the API.
  const [users, setUsers] = useState<User[]>([]);

  // Async function to fetch posts when the button is clicked.
  let fetchUsers = async () => {
    // Call the JSONPlaceholder API for fake post data.
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Parse the response body as JSON.
    let usersData = await response.json();

    // Update state so the component re-renders with the fetched posts.
    setUsers(usersData);
  };

  return (
    <div className="p-3">
      <h2 className="mb-4 text-info">List of Users</h2>
      <button className="btn btn-info my-3" onClick={fetchUsers}>
        Fetch Users
      </button>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-danger">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
