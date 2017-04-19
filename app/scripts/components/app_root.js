import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import marked from "marked";
import Editor from "./editor.js";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/editor">Write Note</NavLink>
      <br />
      <NavLink to="/saved">Saved Notes</NavLink>
    </nav>
  );
};

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    console.log(marked("I am using _markdown_."));
  }

  onHeaderClicked({ history }) {
    return <h1 onClick={() => history.push("/saved")} />;
  }

  render() {
    return (
      <main>
        <NavBar />
        <section>
          <Route render={this.onHeaderClicked} />

        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
