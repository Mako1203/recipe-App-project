    import RecipeList from "../companents/RecipeList"
    
    function AllRecipes(){
        return(
            <><div class="mobile-block__header is-Black">
                all recipes
            </div><div class = "mobile-block">
                    <RecipeList />
                </div></>
        )
    }
    export default AllRecipes;