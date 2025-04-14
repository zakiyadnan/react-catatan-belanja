import groceryItems from '../statis/static'

function GroceryList() {
  return (
    <>
      <div className="list">
        <ul>
          {groceryItems.map((item) => (
            <li>
              <input type="checkbox" />
              <span style={{ textDecoration: "line-through" }}>
                1`{item.quantity} {item.name}
              </span>
              <button>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}

export default GroceryList;
