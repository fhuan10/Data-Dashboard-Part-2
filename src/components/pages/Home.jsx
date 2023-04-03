import { useState, useEffect } from 'react'
import Card from '../Card';
import List from '../List';
import DataVisuals from '../DataVisuals';

function Home(homeInfo) {

  const [numResults, setNumResults] = useState(homeInfo.numResults);
  const [searchInput, setSearch] = useState("");
  const [cusineInput, setCusineInput] = useState("");
  const [recipes, setRecipes] = useState(homeInfo.recipes);
  const [originalRecipes, setOriginalRecipes] = useState(homeInfo.originalRecipes);
  const [haveData, setHaveData] = useState(homeInfo.haveData);

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
    <div className="Home">

      <h1>Recipe Search</h1>
      {haveData ? 
      <div>
        <DataVisuals recipes={originalRecipes}></DataVisuals>
        </div>
      : null}

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
              <th>Detail Link</th>
            </tr>
          </thead>
          {haveData ?
            <tbody>
              {recipes.map((recipe) => <List title={recipe.title} readyInMinutes={recipe.readyInMinutes} servings={recipe.servings} cusine={recipe.cuisines} id={recipe.id}></List>)}
            </tbody>
            :
            null
          }

        </table>

      </div>

    </div>
  )
}

export default Home