import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckoutForm from "../../CheckoutForm/CheckoutForm";

class CheckoutPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h3>Checkout</h3>
        </Row>
        <Row>
          <Col>
            <p>Your Total: $450.00</p>
          </Col>
        </Row>
        <Row>
          <h4>Shipping Information</h4>
        </Row>
        <Row>
          <CheckoutForm />
        </Row>
      </Container>
    );
  }
}

export default CheckoutPage;
