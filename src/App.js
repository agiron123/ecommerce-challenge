import "./App.css";
import ECommerceNavigationBar from "./components/Navbar/ECommerceNavigationBar";
import ECommerceBreadcrumb from "./components/Breadcrumbs/ECommerceBreadcrumb";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import ProductList from "./components/ProductList/ProductList";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <ECommerceNavigationBar />
        </header>
        <ECommerceBreadcrumb />

        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
