import Cooking from "./Cooking";


const Bookmark = ({cartRec,cooking,handlePreparing}) => {
    
    return (
        <div className="border rounded-xl p-5 md:flex md:gap-10 lg:block">
          <div>
            <h2 className="text-2xl font-semibold text-center">Want to cook: {cartRec.length??0}</h2>
          <hr />
          <div className="overflow-x-auto">
            <table className="table table-sm">
            <thead>
              <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            {cartRec.length>0? cartRec.map((cartItem,idx)=><tr key={idx}>
              <th>{idx+1}</th>
              <td>{cartItem.recipe_name}</td>
              <td>{cartItem.preparing_time} minutes</td>
              <td>{cartItem.calories} calories</td>
              <td><button onClick={()=>handlePreparing(cartItem)} className="btn bg-[#0BE58A] rounded-full px-4">Preparing</button></td>
            </tr>):<tr></tr>}
            
            </tbody>
            
          </table>
          </div>
          </div>
          
          <Cooking cooking={cooking}></Cooking>
        </div>
    );
};

export default Bookmark;