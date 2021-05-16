
import './App.css';
import React,{useState,useEffect} from 'react'
import Recipe from './components/Recipe';
//Food Recipe
const App=()=> {
  const appid="5a55bcac"
  const keyy="a83dc93969e057f362fb0b28f9ad0aeb"
  const [recipe, setrecipe] = useState([])
  const [sar, setsar] = useState("")
  const [query, setquery] = useState("")
  useEffect(()=>
  {
    getRecipe()
  },[query])
  const rHandler=(e)=>
  {
    setsar(e.target.value)
  }
 const pHandler=(e)=>
 {e.preventDefault()
  setquery(sar)

 }
  const getRecipe=async()=>
  {
    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${keyy}`)
    const data=await res.json()
    console.log(data)
    setrecipe(data.hits)
  }
  return (
    <div className="App">
      <header className="head">Food Club <i class='fas fa-hamburger'></i></header>
      <form onSubmit={pHandler} className="inp">
        <input className="ii" type="text" value={sar} onChange={rHandler}/>
        <button className="but" type="submit">search</button>
      </form>
      <div className="box">{
        recipe.map(r=>(
          <Recipe 
          key={r.recipe.label}
          title={r.recipe.label}
          image={r.recipe.image}
          calories={r.recipe.calories}
          ingredients={r.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
