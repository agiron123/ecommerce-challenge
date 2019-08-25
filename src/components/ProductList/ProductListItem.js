import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDetailsClicked = this.onDetailsClicked.bind(this);
  }

  onDetailsClicked() {
    this.props.history.push("/details", {
      productDetails: {
        image: this.props.image,
        price: this.props.price,
        productCategory: this.props.productCategory,
        productName: this.props.productName,
        description: this.props.description
      }
    });
  }

  render() {
    return (
      <div>
        <img
          width={250}
          height={250}
          alt={"Product List Item"}
          src={this.props.image}
        />
        <div>{this.props.productCategory}</div>
        <div>{this.props.productName}</div>
        <div>{this.props.price}</div>
        <Button variant="outline-info" onClick={this.onDetailsClicked}>
          Details >
        </Button>
        <Button variant="outline-primary">Add to Cart</Button>
      </div>
    );
  }
}

export default withRouter(ProductListItem);
