<<<<<<< HEAD
function Item ({ item }) {
    return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={ item.checked ? { textDecoration: "line-through" } : {}}>
        1`{item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>)
    
  }

export default Item;
=======
function Item({ item }) {
  return (
    <li key={item.id} style={{ marginTop: "40px" }}>
      <input type="checkbox" />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  );
}

export default Item;
>>>>>>> 7591fa4818b6d45db446d4a1c516af29249ef061
