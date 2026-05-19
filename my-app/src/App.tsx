// import Courses from "./Courses";
// import CoursesBS from "./CoursesBS";
// import CoursesList from "./CoursesList";
// import Counter from "./Counter";
// import CoursesCards from "./CoursesCards";
// import Greeting from "./Greeting";
import ProfileCard from "./ProfileCard";
// import StudentName from "./StudentName";
// import UserInfo from "./UserInfo";

function App() {
  return (
    <div id="app-component" className="container">
      <h1 className="m-3 text-center text-primary mb-5">My Courses App</h1>
      <ProfileCard
        name="Abdul"
        title="Software Engineer"
        skills={["JavaScript", "TypeScript", "React"]}
      ></ProfileCard>
      <ProfileCard
        name="Arif"
        title="Data Analyst"
        skills={["Python", "Pandas", "Power BI"]}
      ></ProfileCard>
    </div>
  );
}

export default App;
