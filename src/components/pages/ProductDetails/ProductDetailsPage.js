import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { addItemToCart } from "../../../actions/cartActions";
import { connect } from "react-redux";

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: null
    };

    this.onAddToCartPressed = this.onAddToCartPressed.bind(this);
  }

  onAddToCartPressed() {
    let item = {
      productId: this.state.productDetails.productId,
      color: this.state.productDetails.color,
      image: this.state.productDetails.image,
      price: this.state.productDetails.price,
      productCategory: this.state.productDetails.productCategory,
      productName: this.state.productDetails.productName,
      description: this.state.productDetails.description
    };

    this.props.addItemToCart(item);
  }

  componentDidMount() {
    if (this.props.history.location) {
      console.log(
        "Product Details: ",
        this.props.history.location.state.productDetails
      );
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

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductDetailsPage);
