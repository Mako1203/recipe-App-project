import RecipeCard from "./RecipeCard";
import{useState, useEffect} from "react";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";
function RecipeList() {


    const [Recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
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
}, []); 

if (isError) {  
    return <Error />
}



    return(
        <div class = "all-recipes">
            {isLoading ? (<Loading/>) :(
                <>
                 {Recipes.map((Recipe) => (
                 <RecipeCard  key={postMessage.id} Recipe={Recipe} />

                )) }
                </>
            )}
       
        </div>
    );
}


export default RecipeList;