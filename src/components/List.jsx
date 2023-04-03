import { Link } from "react-router-dom";
function List(item) {
    let cusineStr = "";

    function CreateCusineString() {
        cusineStr = "";

        if (item.cusine.length == 0) {
            cusineStr = "N/A";
        } else {
            for (let i = 0; i < item.cusine.length-1; i++) {
                cusineStr += item.cusine[i] + ", ";
            }
    
            cusineStr += item.cusine[item.cusine.length-1];
        }

        return <td>{cusineStr}</td>
    }

  return (
    <tr className="ListItem">
      <td>{item.title}</td>
      <td>{item.readyInMinutes}</td>
      <td>{item.servings}</td>
      <CreateCusineString></CreateCusineString>
      <td key={item.id}>
        <Link to={`/recipes/${item.id}`}>
        🔗
        </Link>
      </td>
    </tr>
  )
}

export default List