import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://67a75555203008941f674e2f.mockapi.io/recipes";

function RecipeAdd() {
  // Create provision to store data entered by the user
  const [name, setName] = useState<string>("");
  const [prepTimeMinutes, setPrepTimeMinutes] = useState<string>("");
  const [cookTimeMinutes, setCookTimeMinutes] = useState<string>("");
  const [servings, setServings] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");

  const navigate = useNavigate();

  // hits the API and adds the Recipe in Backend
  const addRecipe = async () => {
    // JavaScript
    const recipe = {
      name,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      difficulty,
      cuisine,
    };

    await fetch(API_URL, {
      method: "POST",
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
        <h2 className="text-primary my-3 text-center">Add Recipe</h2>
        <div className="mb-3">
          <label htmlFor="nameTextBox" className="form-label text-warning">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Recipe Name"
            id="nameTextBox"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={prepTimeMinutes}
            onChange={(event) => setPrepTimeMinutes(event.target.value)}
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
            value={cookTimeMinutes}
            onChange={(event) => setCookTimeMinutes(event.target.value)}
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
            value={servings}
            onChange={(event) => setServings(event.target.value)}
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
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
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
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
          />
        </div>
        {/* Control for Add Recipe button */}
        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={() => addRecipe()}>
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecipeAdd;
