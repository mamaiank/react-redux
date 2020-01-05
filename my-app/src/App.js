import { Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Post from './Post';
import Home from './Home';
import { connect, useDispatch, useSelector } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  isMobile: state.isMobile,
});

class App extends Component {
  resize() {
    if (this.props.isMobile != window.innerWidth <= 767) {
      this.props.dispatch({
        type: "CHANGE_STATE",
        stateName: "isMobile",
        value: window.innerWidth <= 767
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  render() {
    const { isMobile } = this.props;
    console.log(isMobile);
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="mr-auto">
                <Link to="/">Home</Link>
              </Nav> */}
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/post/:id" component={Post} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
