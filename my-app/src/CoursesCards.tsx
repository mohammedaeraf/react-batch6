// TSX - TypeScript XML
function CoursesCards() {
  // static data
  // real world apps - you call backend APIs (ExpressJS) and get the data
  let courses = [
    {
      id: 1,
      name: "React",
      price: 1000,
      duration: "3 months",
      description:
        "Learn React from scratch. Learn React from scratch. Learn React from scratchLearn React from scratch",
      image: "https://admin.tops-int.com/storage/media/editor_images/76414.png",
    },
    {
      id: 2,
      name: "Angular",
      price: 1200,
      duration: "4 months",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente debitis sit esse repellendus",
      image: "https://admin.tops-int.com/storage/media/editor_images/76414.png",
    },
    {
      id: 3,
      name: "Vue",
      price: 900,
      duration: "2 months",
      description: "Learn Vue from scratch",
      image: "https://admin.tops-int.com/storage/media/editor_images/76414.png",
    },
    {
      id: 4,
      name: "NodeJS",
      price: 1500,
      duration: "5 months",
      description: "Learn NodeJS from scratch",
      image: "https://admin.tops-int.com/storage/media/editor_images/76414.png",
    },
    {
      id: 5,
      name: "C++ Programming",
      price: 1500,
      duration: "5 months",
      description: "C++ Programming from Scratch..",
      image: "https://admin.tops-int.com/storage/media/editor_images/76414.png",
    },
  ];
  

  return (
    <div className="row g-4">
      {courses.map((course) => (
        <div className="col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img
              src={course.image}
              className="card-img-top"
              alt={course.name}
            />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <span className="badge bg-primary">{course.duration}</span>
              <p className="card-text">{course.description}</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesCards;
