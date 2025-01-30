
import "./App.css";
import OnlineStatusNotifier from "./components/OnlineStatusNotifier";

import ProductList from "./components/ProductList";
import ProductListRedux from "./components/ProductListRedux";
import ProductListZustand from "./components/ProductListZustand";

function App() {
  return (
    <div className="App">
      <OnlineStatusNotifier/>
      {/* <ProductList/> */}
      {/* <ProductListRedux/> */}
      <ProductListZustand/>
    </div>
  );
}

export default App;
