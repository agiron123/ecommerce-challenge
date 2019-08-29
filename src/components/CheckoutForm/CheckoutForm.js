import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";

const schema = Yup.object({
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
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  zip: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  paymentCardNumber: Yup.string()
    .min(15, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  paymentCardExpiration: Yup.string().required("Required"),
  paymentCardCVV: Yup.string().required("Required")
});

function CheckoutForm(props) {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const hideModal = () => {
    setIsSuccessModalVisible(false);
    props.history.push("/");
  };

  return (
    <>
      <SuccessModal isVisible={isSuccessModalVisible} hideModal={hideModal} />
      <Formik
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setIsSuccessModalVisible(true);

          // applying HOC-pattern
          actions.setSubmitting(false);
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
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormikFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormikStreetLineOne"
              >
                <Form.Label>Street Line 1</Form.Label>
                <Form.Control
                  type="text"
                  name="streetLineOne"
                  value={values.streetLineOne}
                  onChange={handleChange}
                  isValid={touched.streetLineOne && !errors.streetLineOne}
                  isInvalid={!!errors.streetLineOne}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.streetLineOne}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormikStreetLineTwo"
              >
                <Form.Label>Street Line 2 (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  name="streetLineTwo"
                  value={values.streetLineTwo}
                  onChange={handleChange}
                  isValid={touched.streetLineTwo && !errors.streetLineTwo}
                  isInvalid={!!errors.streetLineTwo}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.streetLineTwo}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormikCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                  isValid={touched.city && !errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormikState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                  isValid={touched.state && !errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormikZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                  isValid={touched.zip && !errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormikPaymentCardNumber"
              >
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  name="paymentCardNumber"
                  value={values.paymentCardNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.paymentCardNumber}
                  isValid={
                    touched.paymentCardNumber && !errors.paymentCardNumber
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {errors.paymentCardNumber}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormikPaymentCardExpiration"
              >
                <Form.Label>Exp (MM/YYYY)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Expiration"
                  name="paymentCardExpiration"
                  value={values.paymentCardExpiration}
                  onChange={handleChange}
                  isInvalid={!!errors.paymentCardExpiration}
                  isValid={
                    touched.paymentCardExpiration &&
                    !errors.paymentCardInformation
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {errors.paymentCardExpiration}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationFormikPaymentCardCVV"
              >
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  name="paymentCardCVV"
                  value={values.paymentCardCVV}
                  onChange={handleChange}
                  isInvalid={!!errors.paymentCardCVV}
                  isValid={touched.paymentCardCVV && !errors.paymentCardCVV}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.paymentCardCVV}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Button type="submit">Submit Payment</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

function SuccessModal(props) {
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
