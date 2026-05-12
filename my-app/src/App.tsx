// import Courses from "./Courses";
// import CoursesBS from "./CoursesBS";
// import CoursesList from "./CoursesList";
import CoursesObjects from "./CoursesObjects";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div id="app-component">
      <h1 className="m-3 text-center text-primary">My Courses App</h1>
      <CoursesObjects></CoursesObjects>
      <UserInfo></UserInfo>
    </div>
  );
}

export default App;
