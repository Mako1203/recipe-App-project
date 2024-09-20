import { Link } from "react-router-dom";

function RecipeCard({Recipe}){
    return (
        <Link to={`/Lasagna/${Recipe.id}`} class="recipe-card">
                <div class="container"> 
                    <h3 class="recipe-card-title">{Recipe.title}</h3>
                    <span class="recipe-card-author">{Recipe.author}</span>
                    <span class= "recipe-card-category">{Recipe.category}</span>
                </div>
         </Link>
    );
}
export default RecipeCard;