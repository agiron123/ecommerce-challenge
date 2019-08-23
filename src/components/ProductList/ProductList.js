import React from "react";
import ProductListItem from "./ProductListItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import { Route } from "react-router-dom";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null
    };

    this.renderProducts = this.renderProducts.bind(this);
    this.chunkProductsArray = this.chunkProductsArray.bind(this);
  }

  componentDidMount() {
    fetch("https://my.api.mockaroo.com/product_catalog.json?key=866ae800")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data: ", data);
        this.setState({ products: data });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  chunkProductsArray() {
    // https://stackoverflow.com/questions/8495687/split-array-into-chunks/10456644#10456644
    let perChunk = 3; // items per chunk
    let inputArray = this.state.products;
    const result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    console.log("Chunked Array: ", result);

    return result;
  }

  renderProducts() {
    // First, split this.state.products into many arrays of length three.
    // Render each individual array as a row on the grid.
    if (this.state.products) {
      let rows = this.chunkProductsArray();
      return rows.map(products => {
        return (
          <Row>
            {products.map(product => {
              return (
                <Col>
                  <ProductListItem
                    image={product.image}
                    productCategory={product.product_category}
                    productName={product.product_name}
                    price={product.price}
                    description={product.description}
                  />
                </Col>
              );
            })}
          </Row>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Container>{this.renderProducts()}</Container>
        <Route
          path={`${this.props.match.path}/detail/:id`}
          component={ProductDetailsPage}
        />
      </div>
    );
  }
}

export default ProductList;
