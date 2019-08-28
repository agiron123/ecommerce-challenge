import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: null,
      quantity: 1
    };

    this.onAddToCartPressed = this.onAddToCartPressed.bind(this);
    this.onIncrementButtonPressed = this.onIncrementButtonPressed.bind(this);
    this.onDecrementButtonPressed = this.onDecrementButtonPressed.bind(this);
  }

  onIncrementButtonPressed() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  onDecrementButtonPressed() {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
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

              <Button
                variant="outline-primary"
                onClick={this.onIncrementButtonPressed}
              >
                +
              </Button>

              <Button
                variant="outline-primary"
                onClick={this.onDecrementButtonPressed}
              >
                -
              </Button>

              <p>Quantity: {this.state.quantity}</p>

              <p>
                $
                {(
                  this.state.productDetails.price * this.state.quantity
                ).toFixed(2)}
              </p>

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
