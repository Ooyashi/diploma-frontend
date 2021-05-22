import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts, getPartsByVinCode } from '../../repositories/repository';
import Header from '../Header/header';
import ProductItemHome from '../ProductItem/product-item-home';

type MyProps = { product: any };
type MyState = { products: []; vinCode: string; apiResponse: string };
export class HomeComponent extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      apiResponse: '',
      products: [],
      vinCode: '',
    };
  }
  callApi(): void {
    this.setState({ apiResponse: 'Welcome to my Website!' });
  }
  componentDidMount() {
    this.callApi();
    getProducts().then((products: any) => this.setState({ products }));
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

  render(): JSX.Element {
    const { products } = this.state;
    return (
      <div className="App">
        <Header />
        <h1>A</h1>
        <br></br>
        <h2>{this.state.apiResponse}</h2>
        <h3>
          This is the webpage, where you can buy some goods for your automobile.
        </h3>
        <h3>Featuring search by vincode and simple inteface</h3>
        <div className=" container">
          <h3 className="card-title">
            <br></br>
            <br></br>
            Featured parts of our shop:
          </h3>
          <hr />
          {products.slice(0, 2).map((product, index) => (
            <ProductItemHome product={product} key={index} />
          ))}

          <br />
        </div>
      </div>
    );
  }
}
