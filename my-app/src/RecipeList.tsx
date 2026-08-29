import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  id: string;
};

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://67a75555203008941f674e2f.mockapi.io/recipes",
    );
    const data = await response.json();
    setRecipes(data);
  };

  // code to delete Recipe by calling the API
  const deleteRecipe = async (id: string) => {
    // ask confirmation from user before deleting
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete the selected Recipe?",
    );

    if (isDeleteConfirmed) {
      const API_URL = `https://67a75555203008941f674e2f.mockapi.io/recipes/${id}`;
      await fetch(API_URL, { method: "DELETE" });
      fetchRecipes();
    }
  };

  // To load data directly on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-3">
      <h2 className="mb-4 text-info">List of Recipes</h2>
      <Link className="btn btn-primary mb-4" to="/recipes-add">
        Add a New Recipe
      </Link>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-danger">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Prep Time</th>
            <th>Cook Time</th>
            <th>Servings</th>
            <th>Difficulty</th>
            <th>Cuisine</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.prepTimeMinutes}</td>
              <td>{recipe.cookTimeMinutes}</td>
              <td>{recipe.servings}</td>
              <td>{recipe.difficulty}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <Link
                  to={`/recipes-edit/${recipe.id}`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => deleteRecipe(recipe.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;
