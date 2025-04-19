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
