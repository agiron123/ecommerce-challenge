import "./App.css";
import ECommerceNavigationBar from "./components/Navbar/ECommerceNavigationBar";
import ECommerceBreadcrumb from "./components/Breadcrumbs/ECommerceBreadcrumb";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductDetailsPage from "./components/pages/ProductDetails/ProductDetailsPage";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header>
            <ECommerceNavigationBar />
          </header>
          <ECommerceBreadcrumb />
        </div>

        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={ProductDetailsPage} />
      </Router>
    </Provider>
  );
}

export default App;
