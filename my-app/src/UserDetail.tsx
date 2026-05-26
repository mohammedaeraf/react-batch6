import { useParams } from "react-router-dom";

function UserDetail() {
  const params = useParams();
  return (
    <div>
      <h2>User Details</h2>
      <p>You selected user with ID: {params.id}</p>
      {/* Call API and fetch more details about this User with id - */}
    </div>
  );
}

export default UserDetail;
