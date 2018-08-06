import React from "react";
import {
  TabPane,
  Button,
  ButtonGroup,
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
  ListGroupItem
} from "reactstrap";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import AppTab from "./AppTab";

var intViewportHeight = window.innerHeight;
var intViewportWidth = window.innerWidth;

export default class CellTab extends React.Component {
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
    return (
      <TabPane tabId="3">
        <Row>
          <Media left>
            <Media
              object
              src="http://portal.iclass.hk/images/mdm/devicegroup.png"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 15, marginLeft: 20 }}
            />
            <span style={{ fontSize: 25, color: "#111111", margin: 15 }}>
              8
            </span>
          </Media>

          <Col sm="2" md="2">
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              style={{ width: "100%", marginTop: 15 }}
            >
              <option>學校裝置列表</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="搜索"
            style={{ width: "10%", marginTop: 15 }}
          />

          <Button color="secondary" style={{ height: 40, margin: 15 }}>
            全選
          </Button>
          <Button
            color="secondary"
            style={{ height: 40, margin: 15, marginLeft: -15 }}
          >
            取消全選
          </Button>
          <Button
            color="success"
            style={{ height: 40, margin: 15, marginLeft: -10 }}
          >
            操作
          </Button>
          <Button
            color="primary"
            style={{ height: 40, margin: 15, marginLeft: -10 }}
          >
            Reload
          </Button>
          <Col>
            <Dropdown
              direction="down"
              isOpen={this.props.dropdownOpen}
              toggle={this.toggleDropdown}
              style={{ margin: 15 }}
            >
              <DropdownToggle caret className="btn btn-warning float-right">
                頁
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col
            sm="7"
            md="7"
            style={{
              margin: 5,
              fontSize: 14,
              maxHeight: intViewportHeight * 0.55,
              overflow: "scroll"
            }}
          />
          <Col sm="4" md="4">
            <Nav tabs>
              <NavItem style={{ width: "50%", textAlign: "center" }}>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "16"
                  })}
                  onClick={() => {
                    this.toggle("16");
                  }}
                >
                  設定
                </NavLink>
              </NavItem>
              <NavItem style={{ width: "50%", textAlign: "center" }}>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "17"
                  })}
                  onClick={() => {
                    this.toggle("17");
                  }}
                >
                  應用程式
                </NavLink>
              </NavItem>
            </Nav>
            <AppTab />
          </Col>
        </Row>
      </TabPane>
    );
  }
}
