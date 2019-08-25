import "./App.css";
import ECommerceNavigationBar from "./components/Navbar/ECommerceNavigationBar";
import ECommerceBreadcrumb from "./components/Breadcrumbs/ECommerceBreadcrumb";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter, Route } from "react-router-dom";
import ProductDetailsPage from "./components/pages/ProductDetails/ProductDetailsPage";
import CartPage from "./components/pages/Cart/CartPage";
import CheckoutPage from "./components/pages/Checkout/CheckoutPage";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header>
            <ECommerceNavigationBar />
          </header>
          <ECommerceBreadcrumb />
        </div>

        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={ProductDetailsPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
