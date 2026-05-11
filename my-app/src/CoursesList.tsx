// TSX - TypeScript XML
function CoursesList() {

    // static data
    // real world apps - you call backend APIs (ExpressJS) and get the data
  let courses = [
    "React JS",
    "PHP/Laravel and VueJS",
    "DevOps with AWS",
    "Data Analytics using Python",
  ];

  return (
    <div className="p-3">
      <h2 className="mb-4 text-secondary">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
