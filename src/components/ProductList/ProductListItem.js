import React from "react";
import Button from "react-bootstrap/Button";

class ProductListItem extends React.Component {
  render() {
    return (
      <div>
        <img width={250} height={250} src={this.props.image} />
        <div>{this.props.productCategory}</div>
        <div>{this.props.productName}</div>
        <div>{this.props.price}</div>
        <Button variant="outline-info">Details ></Button>
        <Button variant="outline-primary">Add to Cart</Button>
      </div>
    );
  }
}

export default ProductListItem;
