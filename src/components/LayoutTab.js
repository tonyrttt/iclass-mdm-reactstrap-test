import React from "react";
import {
  TabPane,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Table,
  Card,
  CardText,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  ListGroup,
  ListGroupItem,
  Jumbotron
} from "reactstrap";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import AppTab from "./AppTab";

var intViewportHeight = window.innerHeight;
var intViewportWidth = window.innerWidth;

export default class LayoutTab extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      activeTab: "16"
    };
  }
  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const layoutTemp = (
      <Jumbotron
        style={{
          margin: 30,
          marginTop: 0,
          marginBottom: 15,
          padding: 20,
          borderWidth: 10,
          borderColor: "grey"
        }}
      >
        <Row>
          <Col md="1" sm="1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tablet_font_awesome.svg/768px-Tablet_font_awesome.svg.png"
              style={{ width: 60 }}
              alt=""
            />
          </Col>
          <Col md="3" sm="3">
            <span style={{ fontSize: 25, fontFamily: "bold" }}>
              New Layouts
            </span>
            <p style={{ fontSize: 15 }}>Created on: 2018-08-06 15:13:55</p>
          </Col>
          <Col md="8" sm="8">
            <Button color="warning" style={{ marginLeft: 15, float: "right" }}>
              Trash
            </Button>
            <Button color="dark" style={{ marginLeft: 15, float: "right" }}>
              Edit
            </Button>
            <Button color="dark" style={{ marginLeft: 15, float: "right" }}>
              Copy
            </Button>
            <Button color="dark" style={{ marginLeft: 15, float: "right" }}>
              Install | Remove
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    );
    return (
      <TabPane tabId="6">
        <Row style={{ margin: 35 }}>
          <Col sm="5" md="5">
            <span style={{ fontSize: 30, fontFamily: "bold" }}>
              Layouts - Existing
            </span>
          </Col>
          <Col sm="3" md="3">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Search"
              style={{ height: 40 }}
            />
          </Col>
          <Button color="info" style={{ marginRight: 10 }}>
            Sort
          </Button>
          <Button color="success" style={{ marginRight: 10 }}>
            New
          </Button>
          <Button color="warning" style={{ marginRight: 10 }}>
            Recycle Bin
          </Button>
          <Button color="secondary" style={{ marginRight: 10 }}>
            Info
          </Button>
        </Row>
        <div
          style={{ maxHeight: intViewportHeight * 0.55, overflow: "scroll" }}
        >
          {layoutTemp}
          {layoutTemp}
          {layoutTemp}
          {layoutTemp}
          {layoutTemp}
          {layoutTemp}
        </div>
      </TabPane>
    );
  }
}
