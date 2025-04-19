import { groceryItems } from '../statis/static'

function GroceryList() {
  return (
    <>
      <div className="list">
        <ul>
          {groceryItems.map((item) => (
           <item item={item} key={item.id} />
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
