import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Stremers
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Strems
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
