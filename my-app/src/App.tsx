// import Courses from "./Courses";
// import CoursesBS from "./CoursesBS";
// import CoursesList from "./CoursesList";
// import Counter from "./Counter";
// import CoursesCards from "./CoursesCards";
// import Greeting from "./Greeting";
// import EmployeeCard from "./EmployeeCard";
// import EmployeeDirectory from "./EmployeeDirectory";
// import ProfileCard from "./ProfileCard";
// import StudentName from "./StudentName";
// import UserInfo from "./UserInfo";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CoursesCards from "./CoursesCards";
import EmployeeDirectory from "./EmployeeDirectory";

function App() {
  return (
    <Router>
      <div className="container my-5">
        <h1 className="text-primary">React Router Demo App</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              FLA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employees">
                    Employees
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<CoursesCards />} />
            <Route path="/employees" element={<EmployeeDirectory />} />
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default App;
