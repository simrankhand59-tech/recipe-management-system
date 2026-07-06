import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <div className="recipe-meta">
        <span>{recipe.difficulty}</span>
        <span>{recipe.prepTime + recipe.cookTime}min</span>
        <span>{recipe.category}</span>
      </div>
    </Link>
  );
}

export default RecipeCard;
