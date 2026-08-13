import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Course: describes the shape of each course item we expect from the API.
 * Keeping an interface helps TypeScript catch incorrect property usage.
 */
type Recipe = {
  id: string;
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
};

const RecipeList = () => {
  // API base URL for courses (replace with your own endpoint if needed)
  const API_URL: string = "https://67a75555203008941f674e2f.mockapi.io/recipes";

  // `courses` state: holds the list of courses fetched from the API.
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  /**
   * fetchCourses:
   * - Calls the API to get all courses
   * - Parses the JSON response and stores it in state with `setCourses`
   * - Called initially in useEffect and also after delete to refresh the list
   */
  const fetchRecipes = async () => {
    console.log("in fetchrecipes");
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setRecipes(data);
  };

  // Load courses once when the component mounts.
  useEffect(() => {
    fetchRecipes();
  }, []);

  /**
   * deleteCourse:
   * - Asks the user to confirm deletion using window.confirm
   * - Sends a DELETE request for the selected course id if confirmed
   * - Calls `fetchCourses()` afterwards to refresh the UI
   */
  const deleteRecipe = async (id: string) => {
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete record? ",
    );

    if (isDeleteConfirmed == true) {
      const deleteUrl = `${API_URL}/${id}`;
      await fetch(deleteUrl, { method: "DELETE" });
      // Refresh the list after deleting so UI shows current data
      fetchRecipes();
    }
  };

  return (
    <div id="container">
      {/* Page title */}
      <h1 className="text-danger">Recipe List</h1>

      {/* Link to Add Course page */}
      <Link to={`/add-course`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Course
      </Link>

      {/* Recipes table */}
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Prep Time</th>
            <th scope="col">Cook Time</th>
            <th scope="col">Servings</th>
            <th scope="col">Difficulty Level</th>
            <th scope="col">Cuisine</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            // Each table row must have a unique `key` for React reconciliation
            <tr key={recipe.id}>
              <th scope="row">{recipe.id}</th>
              <td>{recipe.name}</td>
              <td>{recipe.prepTimeMinutes}</td>
              <td>{recipe.cookTimeMinutes}</td>
              <td>{recipe.servings}</td>
              <td>{recipe.difficulty}</td>
              <td>{recipe.cuisine}</td>

              <td>
                {/* Edit navigates to the edit route for the specific course */}
                <Link
                  to={`/edit-recipe/${recipe.id}`}
                  className="btn btn-warning me-3"
                >
                  <i className="bi-pencil-square me-2"></i>Edit
                </Link>

                {/* Delete triggers the deleteCourse handler */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRecipe(recipe.id)}
                >
                  <i className="bi-trash me-2"></i> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
