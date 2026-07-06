import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>

      <h2>Ingredient</h2>
      <ul>
        {recipe.ingredients.map((ing) => (
          <li key={ing.id}>
            {ing.amount} {ing.unit} {ing.name}
          </li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ol>
        {recipe.steps.map((step) => (
          <li key={step.id}>{step.instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
