// CustomerFormFormik.js
import React, { useState } from "react";
import { Field, Formik } from "formik";

import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";

// accept props from the parent component
//export const CheckoutInformationForm = props => {
function CheckoutInformationForm(props) {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const hideModal = () => {
    debugger;
    setIsSuccessModalVisible(false);
    props.history.push("/");

    // TODO: Empty out the cart in redux.
  };

  // initial state (starting field values)
  const initialValues = {
    firstName: "",
    lastName: "",
    streetLineOne: "",
    streetLineTwo: "",
    city: "",
    state: "",
    zip: "",
    paymentCardNumber: "",
    paymentCardExpiration: "",
    paymentCardCVV: ""
  };

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

  return (
    // pass initial field values and actions to Formik-component
    <Formik
      intialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        debugger;

        // TODO: Show success modal
        setIsSuccessModalVisible(true);

        // applying HOC-pattern
        actions.setSubmitting(false);
        actions.resetForm(initialValues);
      }}
      render={props => (
        <>
          <SuccessModal
            isVisible={isSuccessModalVisible}
            hideModal={hideModal}
          />

          <form onSubmit={props.handleSubmit}>
            <div>
              <Field type="text" name="firstName" placeholder="firstName" />
            </div>
            <div>
              <Field type="text" name="lastName" placeholder="lastName" />
            </div>
            <div>
              <Field
                type="text"
                name="streetLineOne"
                placeholder="streetLineOne"
              />
            </div>
            <div>
              <Field
                type="text"
                name="streetLineTwo"
                placeholder="streetLineTwo"
              />
            </div>
            <div>
              <Field type="text" name="city" placeholder="city" />
            </div>

            <div>
              <Field type="text" name="state" placeholder="state" />
            </div>

            <div>
              <Field type="text" name="zip" placeholder="zip" />
            </div>

            <div>
              <Field
                type="text"
                name="paymentCardNumber"
                placeholder="paymentCardNumber"
              />
            </div>

            <div>
              <Field
                type="text"
                name="paymentCardExpiration"
                placeholder="paymentCardExpiration"
              />
            </div>

            <div>
              <Field
                type="text"
                name="paymentCardCVV"
                placeholder="paymentCardCVV"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </>
      )}
    />
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

export default withRouter(CheckoutInformationForm);
