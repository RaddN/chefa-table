import clock from '../assets/clock.svg'
import calorie from '../assets/calorie.svg'
const Recipie = ({recipe,handleCook}) => {
    const {recipe_name,short_description,recipe_image,ingredients,preparing_time,calories}=recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={recipe_image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe_name}</h2>
              <p>{short_description}</p>
              <hr />
              <p className="text-lg font-medium">Ingredients: {ingredients?.length}</p>
              <ul className="list-disc text-[#878787] text-lg ml-5">
                {ingredients.map(ingredient=><li>{ingredient}</li>)}
              </ul>
              <hr />
              <div className="flex gap-1">
                <img src={clock} alt="" width="24px" />
              <p>{preparing_time} minutes</p>
              <img src={calorie} alt="" width="24px" />
              <p>{calories} calories</p>
              </div>
              <div className="card-actions">
                <button onClick={()=>handleCook(recipe)} className="btn btn-primary bg-[#0BE58A] text-[#150B2B] border-none">Want to Cook</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Recipie;