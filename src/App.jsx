import Header from "./components/Header";
import Footer from "./components/Footer";
import GroceryList from "./components/GroceryList";
<<<<<<< HEAD
import Item from "./components/item";
import { groceryItems } from "./statis/static";
=======
// import item from "./components/item";
>>>>>>> 7591fa4818b6d45db446d4a1c516af29249ef061

export default function App() {
  return (
    <div className="app">

      {/* ini component untuk tampilan header */}
      <Header />
      
      <form />
      
      {/* ini tampilan untuk list barang */}
      <GroceryList />
      
      {/* ini tampilan untuk footer */}
      <Footer />
    </div>
  );
}
