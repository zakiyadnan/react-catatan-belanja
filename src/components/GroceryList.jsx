<<<<<<< HEAD
import { groceryItems } from '../statis/static'
import Item from '../components/item'
import Header from './Header';
=======
import { groceryItems } from "../statis/static";
import Item from "./item";
import { useState } from "react";

>>>>>>> 7591fa4818b6d45db446d4a1c516af29249ef061
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
<<<<<<< HEAD
        
          {groceryItems.map((item) => (
           <Item item={item} key={item.id} />
=======
          {groceryItems_copy.map((data) => (
            <Item item={data} key={data.id} />
>>>>>>> 7591fa4818b6d45db446d4a1c516af29249ef061
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
