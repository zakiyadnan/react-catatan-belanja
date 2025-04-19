function item ({ item }) {
    return ()
    <li key={item.id}>
                <input type="checkbox" />
                <span style={ item.checked ? { textDecoration: "line-through" } : {}}>
                  1`{item.quantity} {item.name}
                </span>
                <button>&times;</button>
              </li>
  }

export default item;