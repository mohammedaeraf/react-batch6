// import Courses from "./Courses";
// import CoursesBS from "./CoursesBS";
// import CoursesList from "./CoursesList";
import CoursesCards from "./CoursesCards";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div id="app-component" className="container">
      <h1 className="m-3 text-center text-primary mb-5">My Courses App</h1>
      <CoursesCards></CoursesCards>
    </div>
  );
}

export default App;
