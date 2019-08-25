import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: null
    };

    this.onAddToCartPressed = this.onAddToCartPressed.bind(this);
  }

  onAddToCartPressed() {
    console.log("this.props ", this.props);
    console.log("Product Details Add to Cart Pressed!");
  }

  componentDidMount() {
    if (this.props.history.location) {
      this.setState({
        productDetails: this.props.history.location.state.productDetails
      });
    }
  }

  render() {
    return (
      this.state.productDetails && (
        <Container>
          <Row>
            <Col>
              <img
                src={this.state.productDetails.image}
                width={300}
                height={300}
                alt={"Product Details"}
              />
            </Col>
            <Col>
              <h3>{this.state.productDetails.productCategory}</h3>
              <h2>{this.state.productDetails.productName}</h2>
              <p>${this.state.productDetails.price}</p>
              <Button
                variant="outline-primary"
                onClick={this.onAddToCartPressed}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Description</h2>
              <p>{this.state.productDetails.description}</p>
            </Col>
          </Row>
        </Container>
      )
    );
  }
}

export default ProductDetailsPage;
