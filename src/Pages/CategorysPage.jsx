import { useState, useEffect } from "react";
import All from "../Assets/images/unnamed.png"
import { Link } from "react-router-dom"
import LoadingRow from "../companents/loadingRow";
import axios from "axios";
import Error from "../companents/Error";



function CategorysPage(){

    const [isError, setIsError] = useState(false);
    const [Categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            async function fetchCategories () {
                try {
                    setIsLoading (true);
                    const response = await axios.get('https://06506a41cf6bbafe.mokky.dev/category/');
                    setCategories(response.data);
                }catch(error) {
                    setIsError(true);
                    console.log(error)
                }   finally {
                    setIsLoading(false)
                }
            }
            fetchCategories ();
        }, []);

        if (isError) {
            return <Error /> 
        }



    return(
        <section class="mobile-block">
        <div class="mobile-block__header is-Red" >
            Categories
        </div>
        {isLoading ? (<LoadingRow />) :
            <div class="container">
            <div class = "category-row">
            <Link to={"/"} class="category-country">
                    <img src={All} alt="All" class="category-country__img"/>
                    <span class="category-country__title">All recipes</span>
                </Link>
                {Categories.map((category) => (
                    <Link to={`/Italian/${category.id}`} class="category-country">
                    <img src={category.flag} alt={category.name} class="category-country__img"/>
                    <span class="category-country__title">{category.name}</span>
                </Link>
                ))}
            </div>
        </div>
        }
    </section>
    );
}


export default CategorysPage;