import { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <h1>There was an error</h1>;
    }
    return this.props.children;
  }
}
