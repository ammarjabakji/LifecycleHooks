import React, { Component } from "react";

// const ErrorComponent = props => <div>{props.ingnore}</div>;

class Counter extends Component {
  state = {
    counter: 0,
    seed: 0
  };
  increment = () => this.setState({ counter: this.state.counter + 1 });
  decrement = () => this.setState({ counter: this.state.counter - 1 });

  // copy props to state
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("--------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreTemp &&
      this.props.ignoreTemp !== nextProps.ignoreTemp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      return false;
    }
    console.log("Should Component Update - RENDER");
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("Get Snapshot Before Update");
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Component Did Update");
    //console.log(prevProps, prevState, snapShot);
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component  Will Unmount");
    console.log("-----------------------");
  }

  // conponentDidCatch(error, info) {
  //   console.log("Component Did Catch");
  // }

  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter : {this.state.counter}</div>
        {/* {<ErrorComponent />} */}
      </div>
    );
  }
}

export default Counter;
