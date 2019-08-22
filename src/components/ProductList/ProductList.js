import React from "react";

class ProductList extends React.Component {
  componentDidMount() {
    // TODO: Fetch data
    fetch("https://my.api.mockaroo.com/product_catalog.json?key=866ae800")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data: ", data);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Product List Goes here!</h2>
      </div>
    );
  }
}

export default ProductList;
