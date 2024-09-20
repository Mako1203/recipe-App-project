
import backbtn from "../Assets/images/back.png"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DescLoading from "../companents/DescLoading";
import Error from "../companents/Error";

function LasagnaDescribtion (){

    const {id} = useParams();
    const [Recipe, setPost] = useState({});
    const [isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError] = useState(false);

useEffect(() => {
    async function fetchRecipes() {
        try{
            setIsLoading(true);
            const response = await axios.get(`https://06506a41cf6bbafe.mokky.dev/recipe/${id}`);
            setPost(response.data);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }   finally {
            setIsLoading (false);
        }
    }
    fetchRecipes();
},[id]);

if (isError) {
    return <Error /> 
}


    return(
         <>  <section class="mobile-block"> 
            <div class="back-btn">
                <Link to={"/"} cless="container">
                <img src={backbtn} alt="back-btn" />
                </Link>
            </div>
            {isLoading ? (<DescLoading />) :(
                 <div class=" container">
                 <div class="recipe-details">
                     <div class="recipe-tite">
                         <h1>{Recipe.title}</h1>  </div>
                     <span class="recipe-author"> {Recipe.author}</span>
                     <p class="recipe-ingredients">
                         {Recipe.describtion}
                     </p>
                     <img src={Recipe.imageURL} alt="name"/>
               </div>
             </div>  
            )}
            </section>      
    </>
    );
    }

    export default LasagnaDescribtion;
