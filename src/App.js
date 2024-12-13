
import "./App.css";
import OnlineStatusNotifier from "./components/OnlineStatusNotifier";

import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <OnlineStatusNotifier/>
      <ProductList/>
    </div>
  );
}

export default App;
