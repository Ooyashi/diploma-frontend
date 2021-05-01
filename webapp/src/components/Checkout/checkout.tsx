import React from 'react';
import { getCartProducts, pay } from '../../repositories/repository';
import { Redirect, Link } from 'react-router-dom';

type MyProps = unknown;
type MyState = { products: []; total: number };

export default class Checkout extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { products: [], total: 0 };
  }

  componentDidMount() {
    const cart = localStorage.getItem('cart');
    if (!cart) return;
    getCartProducts(cart).then((products) => {
      let total = 0;

      for (let i = 0; i < products.length; i++) {
        total += products[i].partPrice * products[i].partQuantity;
      }

      this.setState({ products, total });
    });
  }

  pay = (data: any) =>
    pay(data)
      .then((data) => alert(data))
      .catch((err) => console.log(err));

  render() {
    const { products, total } = this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Checkout</h3>
        <hr />
        {products.map((product: any, index) => (
          <div key={index}>
            <p>
              {product.partName}{' '}
              <small> (quantity: {product.partQuantity})</small>
              <span className="float-right text-primary">
                ${product.partQuantity * product.partPrice}
              </span>
            </p>
            <hr />
          </div>
        ))}{' '}
        <hr />
        {products.length ? (
          <div>
            <h4>
              <small>Total Amount:</small>
              <span className="float-right text-primary">${total}</span>
            </h4>
            <hr />
          </div>
        ) : (
          ''
        )}
        {!products.length ? (
          <h3 className="text-warning">No item on the cart</h3>
        ) : (
          ''
        )}
        {products.length ? (
          <button className="btn btn-success float-right" onClick={this.pay}>
            Pay
          </button>
        ) : (
          ''
        )}
        <Link to="/">
          <button
            className="btn btn-danger float-right"
            style={{ marginRight: '10px' }}
          >
            Cancel
          </button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
