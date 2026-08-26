import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Recipe {
  id: string;
  name: string;
  prepTimeMinutes: string;
  cookTimeMinutes: string;
  servings: string;
  difficulty: string;
  cuisine: string;
}

const API_URL = "https://67a75555203008941f674e2f.mockapi.io/recipes";

function RecipeEdit() {
  // The recipe is undefined until the API request finishes.
  const [recipe, setRecipe] = useState<Recipe>();

  const navigate = useNavigate();
  let params = useParams();

  const fetchRecipe = async () => {
    // Load the recipe identified by the route before filling the form.
    const response = await fetch(`${API_URL}/${params.id}`);
    const recipe: Recipe = await response.json();
    setRecipe(recipe);
  };

  // Fetch the current recipe on first render and whenever the route ID changes.
  useEffect(() => {
    fetchRecipe();
  }, [params.id]);

  // Send the edited form values to the API, then return to the recipe list.
  const editRecipe = async () => {
    await fetch(`${API_URL}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    // redirect to RecipeList component after adding
    navigate("/recipes");
  };
  return (
    <div className="container">
      <div className="border rounded shadow p-4">
        <h2 className="text-primary my-3 text-center">Edit Recipe</h2>
        <div className="mb-3">
          <label htmlFor="nameTextBox" className="form-label text-warning">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Recipe Name"
            id="nameTextBox"
            value={recipe?.name}
            onChange={(e) =>
              // Ignore changes until a recipe has been loaded.
              setRecipe((currentRecipe) =>
                currentRecipe
                  ? { ...currentRecipe, name: e.target.value }
                  : currentRecipe,
              )
            }
          />
        </div>
        {/* Controls for Prep Time */}
        <div className="mb-3">
          <label htmlFor="prepTimeTextBox" className="form-label text-warning">
            Prep Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Preparation Time in Minutes"
            id="prepTimeTextBox"
            value={recipe?.prepTimeMinutes}
            onChange={(e) =>
              setRecipe((currentRecipe) =>
                currentRecipe
                  ? { ...currentRecipe, prepTimeMinutes: e.target.value }
                  : currentRecipe,
              )
            }
          />
        </div>
        {/* Controls for Cook Time */}
        <div className="mb-3">
          <label htmlFor="cookTimeTextBox" className="form-label text-warning">
            Cook Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cooking Time in Minutes"
            id="cookTimeTextBox"
            value={recipe?.cookTimeMinutes}
            onChange={(e) =>
              setRecipe((currentRecipe) =>
                currentRecipe
                  ? { ...currentRecipe, cookTimeMinutes: e.target.value }
                  : currentRecipe,
              )
            }
          />
        </div>
        {/* Controls for Cook Time */}
        <div className="mb-3">
          <label htmlFor="servingsTextBox" className="form-label text-warning">
            Servings:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Number of Servings"
            id="servingsTextBox"
            value={recipe?.servings}
            onChange={(e) =>
              setRecipe((currentRecipe) =>
                currentRecipe
                  ? { ...currentRecipe, servings: e.target.value }
                  : currentRecipe,
              )
            }
          />
        </div>
        {/* Controls for Difficulty */}
        <div className="mb-3">
          <label
            htmlFor="difficultyTextBox"
            className="form-label text-warning"
          >
            Difficulty:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Level of Difficulty (Easy, Medium, Hard)"
            id="difficultyTextBox"
            value={recipe?.difficulty}
            onChange={(e) =>
              setRecipe((currentRecipe) =>
                currentRecipe
                  ? { ...currentRecipe, difficulty: e.target.value }
                  : currentRecipe,
              )
            }
          />
        </div>
        {/* Controls for Cusine */}
        <div className="mb-3">
          <label htmlFor="cuisineTextBox" className="form-label text-warning">
            Cuisine:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cuisine (Indian, Chinese, Bhatkali)"
            id="cuisineTextBox"
            value={recipe?.cuisine}
            onChange={(e) =>
              setRecipe((currentRecipe) =>
                currentRecipe
                  ? { ...currentRecipe, cuisine: e.target.value }
                  : currentRecipe,
              )
            }
          />
        </div>
        {/* Control for Add Recipe button */}
        <div className="mt-5">
          <button
            className="btn btn-primary w-100"
            onClick={() => editRecipe()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecipeEdit;
