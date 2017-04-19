import React from "react";
import Input from "./input.js";
import Output from "./output.js";
import Button from "./button.js";

class Editor extends React.Component {
  render() {
    return (
      <main>
        <Input />
        <Output />
        <Button />
      </main>
    );
  }
}

export default Editor;
