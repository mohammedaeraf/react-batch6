type ProfileCardProps = {
  name: string;
  title: string;
  skills: string[];
};

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="container mx-auto border border-primary p-4 rounded mb-4">
      <h2 className="text-warning">User Profile</h2>
      <h3 className="text-info">Name - {props.name}</h3>
      <h4 className="text-secondary">Title - {props.title}</h4>
      <h5 className="text-danger">Skills: </h5>
      <ul>
        {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProfileCard;
