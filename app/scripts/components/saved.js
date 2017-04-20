import React from "react";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <section>
        <h2>{this.props.note}</h2>
      </section>
    );
  }
}

export default Saved;
