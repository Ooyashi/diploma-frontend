import React from 'react';
import { Link } from 'react-router-dom';
import { getCartProducts } from '../../repositories/repository';
import CartItem from '../CartItem/cart-item';
type MyProps = unknown;
type MyState = { products: []; remove: any; total: number };
export default class Cart extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { products: [], remove: {}, total: 0 };
  }

  componentDidMount(): void {
    const cart = localStorage.getItem('cart');

    if (!cart) return;
    getCartProducts(cart).then((products: any) => {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i].partPrice * products[i].partQuantity;
      }
      this.setState({ products, total });
    });
  }

  removeFromCart = (product: any) => {
    const products: any = this.state.products.filter(
      (item: any) => item.id !== product.id,
    );
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    delete cart[product.id.toString()];
    localStorage.setItem('cart', JSON.stringify(cart));
    const total = this.state.total - product.partQuantity * product.partPrice;
    this.setState({ products, total });
  };

  clearCart = (): void => {
    localStorage.removeItem('cart');
    this.setState({ products: [] });
  };

  render(): JSX.Element {
    const { products, total } = this.state;

    return (
      <div className=" container">
        <h3 className="card-title">Cart</h3>
        {products.map((product: any, index: any) => (
          <CartItem
            product={product}
            remove={this.removeFromCart}
            key={index}
          />
        ))}
        {products.length ? (
          <div>
            <h4>
              <small>Total Amount: </small>
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
        <Link to="/checkout">
          <button className="btn btn-success float-right">Checkout</button>
        </Link>
        <button
          className="btn btn-danger float-right"
          onClick={this.clearCart}
          style={{ marginRight: '10px' }}
        >
          Clear Cart
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
