import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
class Navigation extends Component {
    render() {
        return (
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home"><img src="umbrella.png" height="40px" width="40px" /></Navbar.Brand>
          </Navbar>
        );
    }
}

export default Navigation;