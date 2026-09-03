import { useState } from "react";

type Recipe = {
  id: number;
  name: string;
  image: string;
  servings: number;
  difficulty: string;
};

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchRecipes = async () => {
    const apiUrl = `https://dummyjson.com/recipes/search?q=${searchTerm}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    setRecipes(data.recipes);
  };

  return (
    <div className="container">
      <h1 className="text-primary fw-bold mb-4">Search Recipes</h1>
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-3"
          name="searchTextBox"
          id="searchTextBox"
          placeholder="Enter Recipe name that you want to search (e.g. Pizza, Chicken)"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="btn btn-primary" onClick={() => fetchRecipes()}>
          Search
        </button>
      </div>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3 mb-3" key={recipe.id}>
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">Servings: {recipe.servings}</p>
                <p className="card-text">Difficutly: {recipe.difficulty}</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
