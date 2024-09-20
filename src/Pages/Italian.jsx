import { Link, useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";
import Loading from "../companents/Loading";
import axios from "axios";
import RecipeCard from "../companents/RecipeCard";
import Error from "../companents/Error";

function Italian(){

    const [Recipes, setRecipes] = useState([]);
 const {id} = useParams();
 const [category, setCategory] = useState({});
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);

 useEffect(() => {
    async function fetchCategory() {
        try {
           const Response = await axios.get(`https://06506a41cf6bbafe.mokky.dev/category/${id}`);
           setCategory(Response.data);
        }catch(error) {
            setIsError(true);
            console.log(error);
        }
    }


    async function fetchRecipes() {
        try {
            setIsLoading (true);
            const response = await axios.get('https://06506a41cf6bbafe.mokky.dev/recipe');
            setRecipes(response.data);
        }  catch(error) {
            setIsError(true);
               console.log(error);
        }   finally{
            setIsLoading(false);
        }
    }
    fetchRecipes();
    fetchCategory();
}, [id]);

if (isError) {
    return <Error /> 
}

return(
    <section class="mobile-block">
    <div class="mobile-block__header is-Red" >
        {category.name}
    </div>
    <Link to= {"/Lasagna"} class="all-recipes">
    {isLoading ? (<Loading/>) :(
                <>
                 {Recipes.map((Recipe) => {
                 return Recipe.category === category.name ? (
                    <RecipeCard key = {Recipe.id} Recipe={Recipe} />
                 ) : null
                 
                }) }
                </>
            )}

    </Link>
    </section>
);
}

export default Italian;