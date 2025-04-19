import Header from "./components/Header";
import Footer from "./components/Footer";
import GroceryList from "./components/GroceryList";
import Item from "./components/item";
import { groceryItems } from "./statis/static";

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

 