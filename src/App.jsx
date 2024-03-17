import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { useEffect } from "react";
import Recipie from "./Components/Recipie";
import Banner from "./Components/Banner";
import Bookmark from "./Components/Bookmark";

function App() {
 const [recipes,setRecipes] =  useState([]);
 const [cartRec,setCartRec] = useState([]);
 const [cooking,setcooking] = useState([]);
 useEffect(()=>{
  fetch('data.json').then(res=>res.json()).then(recipes =>setRecipes(recipes));
 },[])
 const handleCook = recipe=>{
  setCartRec([...cartRec,recipe]);
 }
 const handlePreparing = cartRec=>{
  setcooking([...cooking,cartRec]);
 }
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <h2 className="text-5xl font-semibold text-center mt-32 mb-4">
        Our Recipes
      </h2>
      <p className="text-center text-base">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
        elementum mauris aenean neque.{" "}
      </p>
      <div className="flex">
        <div className="grid grid-cols-2 gap-10">
          {
            recipes.map(recipe =><Recipie key={recipe.recipe_id} recipe={recipe} handleCook={handleCook}></Recipie>)
          }
        </div>
        <Bookmark cartRec={cartRec} cooking={cooking} handlePreparing={handlePreparing} className="border rounded w-1/3"></Bookmark>
      </div>
    </div>
  );
}

export default App;
