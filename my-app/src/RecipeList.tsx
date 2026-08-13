import { useEffect, useState } from "react";

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

  // To load data directly on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-3">
      <h2 className="mb-4 text-info">List of Recipes</h2>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;
