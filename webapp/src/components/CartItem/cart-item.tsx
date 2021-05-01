import React from 'react';
type MyProps = { product: any; remove: any };
type MyState = { quantity: number };
export default class CartItem extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { quantity: 1 };
  }

  render(): JSX.Element {
    const { product } = this.props;

    return (
      <div className="card" style={{ marginBottom: '10px' }}>
        <div className="card-body">
          <h4 className="card-title">{product.partName}</h4>
          <h5 className="card-text">
            <small>price: </small>${product.partPrice}
          </h5>
          <span className="card-text text-success">
            <small>Quantity: </small>
            {product.partQuantity}
          </span>
          <button
            className="btn btn-sm btn-warning float-right"
            onClick={() => this.props.remove(product)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
