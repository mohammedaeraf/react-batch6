import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RecipeAdd from "./RecipeAdd";
import RecipeList from "./RecipeList";
import Home from "./Home";
import About from "./About";
import RecipeEdit from "./RecipeEdit";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1 className="text-center text-danger py-5 fw-bold display-5">
            Recipe App
          </h1>
          <nav className="navbar navbar-expand-lg">
            <div className="container ">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/recipes">
                    Recipes
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipes" element={<RecipeList />} />
              <Route path="/recipes-add" element={<RecipeAdd />} />
              <Route path="/recipes-edit/:id" element={<RecipeEdit />} />
            </Routes>
          </main>
        </header>
      </div>
    </Router>
  );
}

export default App;
