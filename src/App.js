import Purchase from "./components/Purchase";
import Cart from "./components/Cart";
import Total from "./components/Total";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Purchase />
      <Cart name="Cart Value" />
      <Total />
    </div>
  );
}

export default App;
