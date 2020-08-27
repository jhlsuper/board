import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import "antd/dist/antd.css";
import CustomLayOut from "./containers/Layout";
import * as actions from "./store/actions/auth";
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayOut {...this.props}>
            <BaseRouter />
          </CustomLayOut>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
