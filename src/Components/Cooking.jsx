
const Cooking = ({ cooking }) => {
    let Time = 0;
    let Calori= 0;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">
        Currently cooking: {cooking.length ?? 0}
      </h2>
      <hr />
      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cooking.length > 0 ? (
              cooking.map((cartItem, idx) => {
                Calori +=cartItem.calories;
               Time+=cartItem.preparing_time;
               return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{cartItem.recipe_name}</td>
                  <td>{cartItem.preparing_time} minutes</td>
                  <td>{cartItem.calories} calories</td>
                </tr>)})
            ) : (
              <tr></tr>
            )}
            <tr>
              <td></td>
              <td></td>
              <td>Total Time = {Time??0} minutes</td>
              <td>Total Calories = {Calori??0} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooking;
