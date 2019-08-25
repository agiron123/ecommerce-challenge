import "./CartPage.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.onProceedToCheckoutClicked = this.onProceedToCheckoutClicked.bind(
      this
    );
  }

  onProceedToCheckoutClicked() {
    // Take user to the checkout page. Cart contents is stored in the cartReducer.
    this.props.history.push("/checkout");
  }

  render() {
    return (
      <Container>
        <h3>Your Cart</h3>
        <Row className="checkout-item-row">
          <Col>
            <p>Your Total: $450.00</p>
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

        <Row className="checkout-item-row">
          <Col>
            <img
              src={"http://dummyimage.com/500x500.png/cc0000/ffffff"}
              width={250}
              height={250}
              alt="Clothing Item"
            />
          </Col>
          <Col>
            <h3>Men's Silk Tie</h3>
            <p>$150.00</p>
            <p>Quantity: 1</p>
          </Col>
        </Row>

        <Row className="checkout-item-row">
          <Col>
            <img
              src={"http://dummyimage.com/500x500.png/cc0000/ffffff"}
              width={250}
              height={250}
              alt="Clothing Item"
            />
          </Col>
          <Col>
            <h3>Men's Silk Tie</h3>
            <p>$150.00</p>
            <p>Quantity: 1</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(CartPage);
