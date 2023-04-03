import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import DetailView from './components/pages/DetailView';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=30`;
  const [numResults, setNumResults] = useState(0);
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

  return (
    <div className="App">

        <div className="Header">
          <nav className="NavigationHeader">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

        <Routes>
          {haveData ?
            <Route path="/" element={<Home recipes={recipes} originalRecipes={originalRecipes} haveData={haveData} numResults={numResults}></Home>}/>
          : null}
          <Route path="/about" element={<About />}></Route>
          {haveData ?
          <Route path="/recipes/:id" element={<DetailView recipes={recipes}></DetailView>}></Route>
        : null}
        </Routes>
    </div>
  )
}

export default App
