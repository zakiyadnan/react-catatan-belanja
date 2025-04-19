// import { useState } from "react";

// import { groceryItems } from "../statis/static";

function Header() {
  // const [name, setName] = useState('')
  // const [groceryItems_copy,setGroroceryItems_copy] = useState(groceryItems)

  // const quantityNum = [...Array(20)].map((_, i) => (
  //   <option value={1} key={i + 1}>
  //     {i + 1}
  //   </option>
  // ));

  return (
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
      {/* {quantityNum} */}
    </form>
  );
}

export default Header;
