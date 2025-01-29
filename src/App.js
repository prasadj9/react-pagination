
import "./App.css";
import OnlineStatusNotifier from "./components/OnlineStatusNotifier";

import ProductList from "./components/ProductList";
import ProductListRedux from "./components/ProductListRedux";

function App() {
  return (
    <div className="App">
      <OnlineStatusNotifier/>
      {/* <ProductList/> */}
      <ProductListRedux/>
    </div>
  );
}

export default App;
