function CoursesList() {
  let courses = [
    "React JS",
    "PHP/Laravel and VueJS",
    "DevOps with AWS",
    "Data Analytics using Python",
    "Advanced Excel",
    "Video Editing",
  ];

  return (
    <div className="p-3">
      <h2 className="mb-4 text-info">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
