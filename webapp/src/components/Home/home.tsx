import React from 'react';
import Header from '../Header/header';

export class HomeComponent extends React.Component<
  unknown,
  { apiResponse: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { apiResponse: '' };
  }
  callApi(): void {
    this.setState({ apiResponse: 'Welcome to my Website!' });
  }
  componentDidMount(): void {
    this.callApi();
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <Header />
        <h1>A</h1>
        <br></br>
        <h2>{this.state.apiResponse}</h2>
      </div>
    );
  }
}
