import React from "react";
import { Navbar } from "reactstrap";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class header extends React.Component {
  render() {
    return (
      <Navbar light expand="md" className="header">
        <div className="headerBrand">
          <a>管理版面</a>
        </div>
      </Navbar>
    );
  }
}
