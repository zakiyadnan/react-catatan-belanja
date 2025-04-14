const groceryItems = [
{
  id: 1,
  name: 'kopi Bubuk',
  quantity: 5,
  checked: true,
},

{
  id :2,
  name: 'gula pasir',
  quantity: 5,
  checked: false,
},

{
  id: 3,
  name: 'air minum'
  quantity: 3,
  checked: false,
},



];

export default function App() {
return (
    
    <div className="app">
      <Header />
    <form />
  
   <GroceryList /> 
   <footer />
  </div>
  )
}


function header () {
  return <h1>Hari ini kita belanja 🧅</h1>
}

function return() {
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
  </form>
  )
}

function GroceryList() {
  return (
    <>
    <div className="list">
    <ul>
      {groceryItems.map((item) => (
      <li>
        <input type="checkbox" />
        <span style={{textDecoration:'line-through'}}>1`{item.quantity} {item.name}</span>
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
  )
}

function footer() {
  return  <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
}