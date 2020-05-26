import React from "react";
import { Link } from "react-router-dom";
import store from "../store";

// Component
import Signout from "../components/Signout";

export default class Header extends React.Component {
  state = store.getState();
  constructor(props: any) {
    super(props);
    store.subscribe(
      function (this: any) {
        this.setState({ isSignin: !store.getState().isSignin });
        console.log(this.state);
      }.bind(this)
    );
  }

  render() {
    return (
      <header>
        <div className="SignUp">
          {this.state.isSignin ? <Signout /> : <Link to="/signin">로그인</Link>}
        </div>
        <Link className="Title" to="main">
          르니월드
        </Link>
      </header>
    );
  }
}
