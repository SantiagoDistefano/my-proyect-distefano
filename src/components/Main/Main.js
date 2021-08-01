import "./Main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../../CartProvider/CartProvider";
import { Cart } from "../Cart/Cart";
import { FinishOrder } from "../FinishOrder/FinishOrder";

function Main() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/FinishOrder">
              <FinishOrder />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export { Main };
