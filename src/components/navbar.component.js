import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Plan With a Purpose</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Plans</Link>
          </li>
          <li className="navbar-item">
          <Link to="/newplan" className="nav-link">New Plan</Link>
          </li>
          <li className="navbar-item">
          <Link to="/findapurpose" className="nav-link">Find a Purpose</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}