import { groceryItems } from "../statis/static";
import Item from "./item";
import { useState } from "react";

function GroceryList() {
  const [groceryItems_copy, setGroceryItems_copy] = useState(groceryItems);

  const tambah_data = () => {
    setGroceryItems_copy((item) => [
      ...item,
      {
        id: item.length + 1,
        name: "kopi Bubuk",
        quantity: 5,
        checked: false,
      },
    ]);
  };

  return (
    <>
      <button onClick={() => tambah_data()}>Tambah</button>
      <div className="list">
        <ul>
          {groceryItems_copy.map((data) => (
            <Item item={data} key={data.id} />
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
