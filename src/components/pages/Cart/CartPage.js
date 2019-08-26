import "./CartPage.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addItemToCart,
  removeItemFromCartByIndex
} from "../../../actions/cartActions";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.onProceedToCheckoutClicked = this.onProceedToCheckoutClicked.bind(
      this
    );

    this.onRemoveFromCartClicked = this.onRemoveFromCartClicked.bind(this);
    this.renderCartList = this.renderCartList.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  // Future work: Add sales tax and subtotal, and maybe even shipping and handling costs.
  calculateTotal() {
    if (!this.props.cartItems) {
      return (0.0).toFixed(2);
    }

    let total = 0;
    this.props.cartItems.forEach(element => {
      total = total + element.price;
    });

    return total.toFixed(2); // Round to two decimal places for $$
  }

  onProceedToCheckoutClicked() {
    // Take user to the checkout page. Cart contents is stored in the cartReducer.
    this.props.history.push("/checkout");
  }

  onRemoveFromCartClicked(index) {
    this.props.removeItemFromCartByIndex(index);
  }

  renderCartList() {
    if (!this.props.cartItems) {
      return null;
    }

    return (
      <>
        {this.props.cartItems.map((cartItem, index) => {
          return (
            <Row className="checkout-item-row" key={index}>
              <Col>
                <img
                  src={cartItem.image}
                  width={250}
                  height={250}
                  alt="Clothing Item"
                />
              </Col>
              <Col>
                <h3>{cartItem.productName}</h3>
                <p>{cartItem.price}</p>
                <p>Quantity: 1</p>
                <p>Color: {cartItem.color}</p>
                <Button
                  variant="outline-primary"
                  onClick={this.onRemoveFromCartClicked.bind(this, index)}
                >
                  Remove from Cart
                </Button>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <Container>
        <h3>Your Cart</h3>

        {this.props.cartItems && this.props.cartItems.length > 0 ? (
          <Row className="checkout-item-row">
            <Col>
              <p>Your Total: ${this.calculateTotal()}</p>
            </Col>
            <Col>
              <Button
                variant="outline-primary"
                onClick={this.onProceedToCheckoutClicked}
              >
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <h3>Your cart looks empty. Start shopping and add some swag!</h3>
            </Col>
          </Row>
        )}

        {this.renderCartList()}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCartByIndex: index =>
      dispatch(removeItemFromCartByIndex(index))
  };
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.items
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartPage)
);
