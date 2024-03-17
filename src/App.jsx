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
 const handlePreparing = addItem=>{
  setcooking([...cooking,addItem]);
  const remainCartItem = cartRec.filter(cartItem=>cartItem.recipe_id!==addItem.recipe_id);
  setCartRec(remainCartItem);
 }
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <h2 className="text-5xl font-semibold text-center mt-32 mb-4">
        Our Recipes
      </h2>
      <p className="text-center text-base max-w-4xl mx-auto my-5">
      Discover an array of tantalizing recipes that will excite your taste buds and nourish your body. From mouthwatering mains to delectable desserts, our culinary creations will leave you craving for more.
      </p>
      <div className="flex gap-10">
        <div className="grid grid-cols-2 gap-10 w-2/3">
          {
            recipes.map(recipe =><Recipie key={recipe.recipe_id} recipe={recipe} handleCook={handleCook}></Recipie>)
          }
        </div>
        <div className="w-1/3">
        <Bookmark cartRec={cartRec} cooking={cooking} handlePreparing={handlePreparing} ></Bookmark>
        </div>
      </div>
    </div>
  );
}

export default App;
