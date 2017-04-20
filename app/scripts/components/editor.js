import React from "react";
import Input from "./input.js";
import Output from "./output.js";
import Button from "./button.js";
import { connect } from "react-redux";
import container from "../containers/all.js";
import marked from "marked";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    let input = e.target.value;
    this.props.dispatch({ type: "INPUT_KEY", text: marked(input) });
  }

  render() {
    return (
      <main className="main-style">
        <Input onChange={this.handleKey} />
        <Output text={this.props.note} />
        <Button text={this.props.note} />
      </main>
    );
  }
}

export default connect(container.allState)(Editor);
//connect to store to get the state then pass in the state as props to <Output />
