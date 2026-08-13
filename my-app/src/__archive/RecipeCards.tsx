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

const RecipeCards = () => {
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
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-danger mb-0">Recipe List</h1>

        <Link to={`/add-course`} className="btn btn-primary">
          <i className="bi-plus-circle me-2"></i>
          Add Course
        </Link>
      </div>

      <div className="row g-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-6 col-xl-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1">Recipe #{recipe.id}</p>
                    <h5 className="card-title mb-0">{recipe.name}</h5>
                  </div>
                  <span className="badge bg-primary rounded-pill">
                    {recipe.cuisine}
                  </span>
                </div>

                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0">
                    <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min
                  </li>
                  <li className="list-group-item px-0">
                    <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min
                  </li>
                  <li className="list-group-item px-0">
                    <strong>Servings:</strong> {recipe.servings}
                  </li>
                  <li className="list-group-item px-0">
                    <strong>Difficulty:</strong> {recipe.difficulty}
                  </li>
                </ul>
              </div>

              <div className="card-footer bg-white border-0 pt-0">
                <div className="d-flex gap-2">
                  <Link
                    to={`/edit-recipe/${recipe.id}`}
                    className="btn btn-warning flex-fill"
                  >
                    <i className="bi-pencil-square me-2"></i>Edit
                  </Link>

                  <button
                    className="btn btn-danger flex-fill"
                    onClick={() => deleteRecipe(recipe.id)}
                  >
                    <i className="bi-trash me-2"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCards;
