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

export default class deviceTab extends React.Component {
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
    const deviceTemp = (
      <tr>
        <td>Air013</td>
        <td>Air013</td>
        <td>
          <Media
            object
            src="http://cdn.pixabay.com/photo/2014/04/02/11/01/tick-305245_960_720.png"
            alt="Generic placeholder image"
            style={{ width: 15, margin: 5 }}
          />
        </td>
        <td>
          <Media
            object
            src="http://cdn.pixabay.com/photo/2012/04/24/13/49/red-40144_960_720.png"
            alt="Generic placeholder image"
            style={{ width: 15, margin: 5 }}
          />
        </td>
        <td>51.1GB</td>
        <td>
          <span style={{ color: "red" }}>13%</span>
        </td>
        <td>
          <span style={{ color: "red" }}>2018-07-26 18:12</span>
        </td>
      </tr>
    );

    return (
      <TabPane tabId="1">
        <Row>
          <Media left>
            <Media
              object
              src="http://portal.iclass.hk/images/mdm/device.png"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 15, marginLeft: 20 }}
            />
            <span style={{ fontSize: 25, color: "#111111", margin: 15 }}>
              111
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
          >
            <Table responsive size="sm">
              <thead>
                <tr>
                  <th>MDM Name</th>
                  <th>iPad Name</th>
                  <th>Supervise</th>
                  <th>Shared</th>
                  <th>儲存</th>
                  <th>電池</th>
                  <th>最後更新</th>
                  <th>應用程式</th>
                </tr>
              </thead>
              <tbody>
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
                {deviceTemp}
              </tbody>
            </Table>
          </Col>
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
            <AppTab activeTab={this.state.activeTab} />
          </Col>
        </Row>
      </TabPane>
    );
  }
}
