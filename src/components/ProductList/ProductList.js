import React from "react";
import ProductListItem from "./ProductListItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      filteredProducts: null,
      searchText: ""
    };

    this.renderProducts = this.renderProducts.bind(this);
    this.chunkProductsArray = this.chunkProductsArray.bind(this);
  }

  onSortByCategoryClicked = () => {
    let sortedProducts = this.state.filteredProducts;

    sortedProducts.sort((a, b) => {
      const productCategoryA = a.product_category.toUpperCase();
      const productCategoryB = b.product_category.toUpperCase();

      if (productCategoryA < productCategoryB) {
        return -1;
      }
      if (productCategoryA > productCategoryB) {
        return 1;
      }

      return 0;
    });

    this.setState({ filteredProducts: sortedProducts });
  };

  onSortByNameClicked = () => {
    let sortedProducts = this.state.filteredProducts;

    sortedProducts.sort((a, b) => {
      const productCategoryA = a.product_name.toUpperCase();
      const productCategoryB = b.product_name.toUpperCase();

      if (productCategoryA < productCategoryB) {
        return -1;
      }
      if (productCategoryA > productCategoryB) {
        return 1;
      }

      return 0;
    });

    this.setState({ filteredProducts: sortedProducts });
  };

  onSearchClicked = () => {
    if (this.state.searchText.length === 0) {
      this.setState({ filteredProducts: this.state.products });
    }

    const filteredProducts = this.state.products.filter(product => {
      return product.product_name.search(this.state.searchText) !== -1;
    });

    this.setState({ filteredProducts });
  };

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  componentDidMount() {
    fetch("https://my.api.mockaroo.com/product_catalog.json?key=866ae800")
      .then(response => response.json())
      .then(data => {
        let enrichedData = data.map(element => {
          return { ...element, quantity: 1 };
        });

        this.setState({
          products: enrichedData,
          filteredProducts: enrichedData
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  chunkProductsArray() {
    // Fun stuff: https://stackoverflow.com/questions/8495687/split-array-into-chunks/10456644#10456644
    let perChunk = 3; // items per chunk
    let inputArray = this.state.filteredProducts;
    const result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return result;
  }

  renderProducts() {
    // First, split this.state.products into many arrays of length three.
    // Render each individual array as a row on the grid.
    if (this.state.filteredProducts) {
      let rows = this.chunkProductsArray();
      return rows.map((products, productPageIndex) => {
        return (
          <Row key={productPageIndex}>
            {products.map(product => {
              return (
                <Col>
                  <ProductListItem
                    key={product.product_id}
                    productId={product.product_id}
                    image={product.image}
                    productCategory={product.product_category}
                    productName={product.product_name}
                    price={product.price}
                    description={product.description}
                    color={product.color}
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
        <Container>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button variant="outline-success" onClick={this.onSearchClicked}>
              Search
            </Button>

            <Button
              variant="outline-success"
              onClick={this.onSortByNameClicked}
            >
              Sort by Name
            </Button>

            <Button
              variant="outline-success"
              onClick={this.onSortByCategoryClicked}
            >
              Sort by Category
            </Button>
          </Form>
          {this.renderProducts()}
        </Container>
      </div>
    );
  }
}

export default ProductList;
