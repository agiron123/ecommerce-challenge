import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CartPage.css";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
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
            <Button variant="outline-primary">Proceed to Checkout</Button>
          </Col>
        </Row>

        <Row className="checkout-item-row">
          <Col>
            <img
              src={"http://dummyimage.com/500x500.png/cc0000/ffffff"}
              width={250}
              height={250}
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

export default CartPage;
