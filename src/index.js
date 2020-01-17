import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      temp: 0,
      seed: 40
    };

    this.toggleCounter = () => this.setState({ mount: !this.state.mount });

    this.ignoreTemp = () => this.setState({ temp: Math.random() });

    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div className="App">
        {this.state.mount ? (
          <Counter igonoreTemp={this.state.temp} seed={this.state.seed} />
        ) : null}
        <br />
        <button onClick={this.toggleCounter}>
          {this.state.mount ? "Hide" : "Show"}
        </button>
        <p />
        <button onClick={this.ignoreTemp}>Ignore Prop</button>
        <p />
        <button onClick={this.seedGenerator}>Generate Seed</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
