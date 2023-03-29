import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';
import List from './components/List';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20`;

  const [numResults, setNumResults] = useState(0);
  const [searchInput, setSearch] = useState("");
  const [cusineInput, setCusineInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [originalRecipes, setOriginalRecipes] = useState([]);
  const [haveData, setHaveData] = useState(false);


  const fetchData = async () => {
    const response = await fetch(URL);
    const json = await response.json();

    console.log(json);
    setRecipes(json.recipes);
    setOriginalRecipes(json.recipes);
    setNumResults(json.recipes.length);


    console.log("Good");
    console.log(recipes);
    console.log(numResults);
    setHaveData(true);
  }

  useEffect(() => {
    fetchData();

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(searchInput);
    console.log(cusineInput);

    // Search Bar
    let filteredRecipes = originalRecipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput.toLowerCase()));

    // Check cusines
    if (cusineInput != "") {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.cuisines.includes(cusineInput));
    }


    if (filteredRecipes.length == 0) {
      setHaveData(false);
    } else {
      setHaveData(true);
    }

    setRecipes(filteredRecipes);
    setNumResults(filteredRecipes.length);
  }


  return (
    <div className="App">
      <h1>Recipe Search</h1>
      {haveData ?
        <div className="Cards">
          <Card title="Food of the Day: " text={recipes[0].title}></Card>
          <Card title="Time Preparation: " text={recipes[0].readyInMinutes + " minutes"}></Card>
          <Card title="Total Servings: " text={recipes[0].servings}></Card>
        </div>
        :
        <div className="Cards">
          <Card title="Opps, there is no data available based on your filters."></Card>
        </div>
      }

      <div className="Filter">
        <form onSubmit={handleSubmit}>
          <input className="SearchBar" type="search" value={searchInput} placeholder="Type the name of the recipe..." onChange={(e) => setSearch(e.target.value)}></input>
          
          <br></br>

          <label className="CusineLabel"><b>SELECT A CUSINE</b></label>
          <div className="ChooseCusine">
            <input type="radio" name="foodCusine" value="" onChange={(e) => setCusineInput(e.target.value)}></input>No Preference
            <input type="radio" name="foodCusine" value="African" onChange={(e) => setCusineInput(e.target.value)}></input>African
            <input type="radio" name="foodCusine" value="American" onChange={(e) => setCusineInput(e.target.value)}></input>American
            <input type="radio" name="foodCusine" value="Chinese" onChange={(e) => setCusineInput(e.target.value)}></input>Chinese
            <input type="radio" name="foodCusine" value="European" onChange={(e) => setCusineInput(e.target.value)}></input>European
            <input type="radio" name="foodCusine" value="French" onChange={(e) => setCusineInput(e.target.value)}></input>French
            <input type="radio" name="foodCusine" value="German" onChange={(e) => setCusineInput(e.target.value)}></input>German
            <input type="radio" name="foodCusine" value="Greek" onChange={(e) => setCusineInput(e.target.value)}></input>Greek
            <input type="radio" name="foodCusine" value="Indian" onChange={(e) => setCusineInput(e.target.value)}></input>Indian
            <input type="radio" name="foodCusine" value="Korean" onChange={(e) => setCusineInput(e.target.value)}></input>Korean
            <input type="radio" name="foodCusine" value="Mediterranean" onChange={(e) => setCusineInput(e.target.value)}></input>Mediterranean
            <input type="radio" name="foodCusine" value="Middle Eastern" onChange={(e) => setCusineInput(e.target.value)}></input>Middle Eastern
            <input type="radio" name="foodCusine" value="Thai" onChange={(e) => setCusineInput(e.target.value)}></input>Thai
            <input type="radio" name="foodCusine" value="Southern" onChange={(e) => setCusineInput(e.target.value)}></input>Southern
          </div>

          <button className="FilterButton" type="submit">FILTER</button>
        </form>

        <br></br>
      </div>

      <h3>There are {numResults} results shown below.</h3>

      <div className="List">
        <table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Time to Make (min)</th>
              <th>Amount of Servings</th>
              <th>Cusinies</th>
            </tr>
          </thead>
          {haveData ?
            <tbody>
              {recipes.map((recipe) => <List title={recipe.title} readyInMinutes={recipe.readyInMinutes} servings={recipe.servings} cusine={recipe.cuisines}></List>)}
            </tbody>
            :
            null
          }

        </table>

      </div>
    </div>
  )
}

export default App
