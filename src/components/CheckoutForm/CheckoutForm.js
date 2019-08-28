import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  streetLineOne: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  streetLineTwo: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  zip: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  paymentCardNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  paymentCardExpiration: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  paymentCardCVV: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

function CheckoutForm(props) {
  const [lgShow, setLgShow] = useState(true);

  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const hideModal = () => {
    console.log("Hide Modal");
    // TODO: Set modal to not visible anymore.
    setIsSuccessModalVisible(false);

    // Navigate to the home page.
    props.history.push("/");
  };

  return (
    <>
      <SuccessModal isVisible={isSuccessModalVisible} hideModal={hideModal} />
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          debugger;
          // TODO: Show success modal in here.
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        initialValues={{}}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="streetLineOne">
                <Form.Label>Street Address Line 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street Address Line 1"
                  name="streetLineOne"
                  value={values.streetLineOne}
                  onChange={handleChange}
                  isInvalid={!!errors.streetLineOne}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.streetLineOne}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="streetLineTwo">
                <Form.Label>Street Address Line 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street Address Line 2"
                  name="streetLineTwo"
                  value={values.streetLineTwo}
                  onChange={handleChange}
                  isInvalid={!!errors.streetLineTwo}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.streetLineTwo}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <h4>Payment Information</h4>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="paymentCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  name="paymentCardNumber"
                  value={values.paymentCardNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.paymentCardNumber}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.paymentCardNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="paymentCardExpiration">
                <Form.Label>Expiration (MM/YY)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exp"
                  name="paymentCardExpiration"
                  value={values.paymentCardExpiration}
                  onChange={handleChange}
                  isInvalid={!!errors.paymentCardExpiration}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.paymentCardExpiration}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="paymentCardCVV">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  name="paymentCardCVV"
                  value={values.paymentCardCVV}
                  onChange={handleChange}
                  isInvalid={!!errors.paymentCardCVV}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.paymentCardCVV}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Confirm and Pay</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

function SuccessModal(props) {
  console.log("SuccessModal Props: ", props);
  const [lgShow, setLgShow] = useState(true);

  /*
  <Button onClick={() => setSmShow(true)}>Small modal</Button>
  <Button onClick={() => setLgShow(true)}>Large modal</Button>
  */

  const hideModal = () => {
    props.hideModal();
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.isVisible}
        onHide={hideModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Payment successful. Your products are on the way.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default withRouter(CheckoutForm);
