import React from "react";
import Button from "react-bootstrap/Button";

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: null
    };

    this.onAddToCartPressed = this.onAddToCartPressed.bind(this);
  }

  onAddToCartPressed() {
    console.log("this.props ", this.props);
    console.log("Product Details Add to Cart Pressed!");
  }

  componentDidMount() {
    const productDetails = this.props.history.location.state;
    console.log("ProductInfo: ", productDetails);
    this.setState({
      productDetails: this.props.history.location.state.productDetails
    });
  }

  render() {
    return (
      this.state.productDetails && (
        <div>
          <div>
            <div>
              <h2>Product Details Page</h2>
              <img src={this.state.productDetails.image} />
            </div>
            <div>
              <h3>{this.state.productDetails.productCategory}</h3>
              <h2>{this.state.productDetails.productName}</h2>
              <p>{this.state.productDetails.price}</p>
              <Button
                variant="outline-primary"
                onClick={this.onAddToCartPressed}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div>
            <h2>Description</h2>
            <p>{"Description goes here."}</p>
          </div>
        </div>
      )
    );
  }
}

export default ProductDetailsPage;
