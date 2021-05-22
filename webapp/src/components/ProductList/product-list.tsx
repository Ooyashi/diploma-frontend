import React from 'react';
import ProductItem from '../ProductItem/product-item';
import { getPartsByVinCode, getProducts } from '../../repositories/repository';
import { Link } from 'react-router-dom';
type MyProps = { product: any };
type MyState = { products: []; vinCode: string };

export default class ProductList extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      vinCode: '',
    };
  }

  handleVinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ vinCode: e.target.value });
  };

  getPartsByVinCode() {
    const vinCode = this.state.vinCode;

    getPartsByVinCode(vinCode).then((products: any) =>
      this.setState({ products }),
    );
  }

  componentDidMount() {
    getProducts().then((products: any) => this.setState({ products }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className=" container">
        <h3 className="card-title">
          <p>Vin Code Part Search</p>
          <input
            name="vinCode"
            type="text"
            size={20}
            value={this.state.vinCode}
            onChange={this.handleVinCodeChange}
          ></input>
          <button
            className="btn btn-primary"
            onClick={() => this.getPartsByVinCode()}
          >
            Search
          </button>
          <br></br>
          <br></br>
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
