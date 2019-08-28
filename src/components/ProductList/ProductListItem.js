import "./ProductListItem.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { addItemToCart } from "../../actions/cartActions";
import { connect } from "react-redux";

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDetailsClicked = this.onDetailsClicked.bind(this);
    this.onAddToCartClicked = this.onAddToCartClicked.bind(this);
  }

  onAddToCartClicked() {
    let item = {
      productId: this.props.productId,
      color: this.props.color,
      image: this.props.image,
      price: this.props.price,
      productCategory: this.props.productCategory,
      productName: this.props.productName,
      description: this.props.description,
      quantity: 1 // Static at one as you can't edit quantity in the list item.
    };

    this.props.addItemToCart(item);
  }

  onDetailsClicked() {
    this.props.history.push("/details", {
      productDetails: {
        productId: this.props.productId,
        color: this.props.color,
        image: this.props.image,
        price: this.props.price,
        productCategory: this.props.productCategory,
        productName: this.props.productName,
        description: this.props.description,
        quantity: 1 // Static at one as you can't edit quantity in the list item.
      }
    });
  }

  render() {
    return (
      <div className="product-list-item">
        <img
          width={250}
          height={250}
          alt={"Product List Item"}
          src={this.props.image}
        />
        <div>{this.props.productCategory}</div>
        <div>{this.props.productName}</div>
        <div>${this.props.price}</div>
        <Button variant="outline-info" onClick={this.onDetailsClicked}>
          Details >
        </Button>
        <Button
          variant="outline-primary"
          onClick={this.onAddToCartClicked}
          className="list-item-add-to-cart-button"
        >
          Add to Cart
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProductListItem)
);
