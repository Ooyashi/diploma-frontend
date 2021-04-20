import React from 'react';
import ProductItem from '../ProductItem/product-item';
import { getProducts } from '../../repositories/repository';
import { Link } from 'react-router-dom';
type MyProps = { product: any };
type MyState = { products: [] };

export default class ProductList extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    getProducts().then((products: any) => this.setState({ products }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className=" container">
        <h3 className="card-title">
          List of Available Products
          <Link to="/checkout">
            <button className="btn btn-success float-right">Checkout</button>
          </Link>
          <Link to="/cart">
            <button
              className="btn btn-primary float-right"
              style={{ marginRight: '10px' }}
            >
              View Cart
            </button>
          </Link>
        </h3>
        <hr />
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}

        <br />
      </div>
    );
  }
}
