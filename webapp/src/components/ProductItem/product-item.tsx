/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from 'react';

type MyProps = { product: any };
type MyState = { [x: string]: string; quantity: string };

export default class ProductItem extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { quantity: '1' };
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) =>
    this.setState({ [event.currentTarget.name]: event.currentTarget.name });

  addToCart = () => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') || '{}')
      : {};
    const id = this.props.product.id.toString();

    cart[id] = cart[id] ? cart[id] : 0;

    const qty: number = cart[id] + parseInt(this.state.quantity);
    if (this.props.product.available_quantity < qty) {
      cart[id] = this.props.product.available_quantity;
    } else {
      cart[id] = qty;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { product } = this.props;
    return (
      <div className="card" style={{ marginBottom: '10px' }}>
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.description}</p>
          <h5 className="card-text">
            <small>price: </small>${product.price}
          </h5>
          <span className="card-text">
            <small>Available Quantity: </small>
            {product.available_quantity}
          </span>
          {product.available_quantity > 0 ? (
            <div>
              <button
                className="btn btn-sm btn-warning float-right"
                onClick={this.addToCart}
              >
                Add to cart
              </button>
              <input
                type="number"
                value={this.state.quantity}
                name="quantity"
                onChange={(e) => this.setState({ quantity: e.target.value })}
                className="float-right"
                style={{
                  width: '60px',
                  marginRight: '10px',
                  borderRadius: '3px',
                }}
              />
            </div>
          ) : (
            <p className="text-danger"> product is out of stock </p>
          )}
        </div>
      </div>
    );
  }
}
