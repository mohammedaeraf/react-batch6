// TSX - TypeScript XML
function CoursesObjects() {
  // static data
  // real world apps - you call backend APIs (ExpressJS) and get the data
  let courses = [
    {
      id: 1,
      name: "React",
      price: 1000,
      duration: "3 months",
      description: "Learn React from scratch",
    },
    {
      id: 2,
      name: "Angular",
      price: 1200,
      duration: "4 months",
      description: "Learn Angular from scratch",
    },
    {
      id: 3,
      name: "Vue",
      price: 900,
      duration: "2 months",
      description: "Learn Vue from scratch",
    },
    {
      id: 4,
      name: "NodeJS",
      price: 1500,
      duration: "5 months",
      description: "Learn NodeJS from scratch",
    },
  ];

  return (
    <div className="p-3">
      <h2 className="mb-4 text-secondary">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">
            <h4 className="fw-bold text-primary">{course.name}</h4>
            <h5 className="text-secondary">Duration: {course.duration}</h5>
            <div className="text-muted">{course.description}</div>
            <div className="text-danger">Price - ${course.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesObjects;
