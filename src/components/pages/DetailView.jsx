import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function DetailView(detailInfo) {
    const [recipe, setRecipe] = useState();
    const [hasRecipe, setHasRecipe] = useState(false);
    const params = useParams();

    const URL = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`;

    console.log("ID: " + params.id);

    const fetchRecipe = async () => {
        const response = await fetch(URL);
        const json = await response.json();

        console.log(json);
        console.log("It works");

        setRecipe(json);
        setHasRecipe(true);
    }





    useEffect(() => {
        fetchRecipe();
    }, []);

    return (
        <div className="DetailView">
            {hasRecipe ?
                <div className="RecipeView">
                    <h1>{recipe.title}</h1>
                    <img src={recipe.image}></img>
                    <h4>Servings: {recipe.servings}
                        <br></br> Prep/Cooking Time: {recipe.readyInMinutes} minutes
                        <br></br> Vegan: {recipe.vegan ? "Yes" : "No"}
                        <br></br> Vegetarian: {recipe.vegetarian ? "Yes" : "No"}
                        <br></br> Dairy-free: {recipe.dairyFree ? "Yes" : "No"}
                    </h4>
                    <p>{recipe.summary.replace(/(<([^>]+)>)/ig, '')}</p>
                </div>
                : null}

        </div>
    )
}

export default DetailView