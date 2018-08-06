import React from "react";
import {
  TabPane,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Media,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

var intViewportHeight = window.innerHeight;
var intViewportWidth = window.innerWidth;

export default class deviceTab extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }
  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const products = [
      {
        id: "1",
        name: "1"
      },
      {
        id: "2",
        name: "2"
      },
      {
        id: "3",
        name: "3"
      },
      {
        id: "4",
        name: "4"
      }
    ];

    const columns = [
      {
        dataField: "id",
        text: "Role",
        sort: true
      },
      {
        dataField: "name",
        text: "Mappings",
        sort: true
      },
      {
        dataField: "id",
        text: "PersonID",
        sort: true
      },
      {
        dataField: "name",
        text: "Grade",
        sort: true
      },
      {
        dataField: "id",
        text: "WeakID",
        sort: true
      },
      {
        dataField: "name",
        text: "AppleID",
        sort: true
      },
      {
        dataField: "id",
        text: "Name",
        sort: true
      },
      {
        dataField: "name",
        text: "Status",
        sort: true
      }
    ];

    return (
      <TabPane tabId="2">
        <Row>
          <Media left>
            <Media
              object
              src="http://portal.iclass.hk/images/mdm/device.png"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 15, marginLeft: 20 }}
            />
            <span style={{ fontSize: 25, color: "#111111", margin: 15 }}>
              0/0
            </span>
          </Media>

          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="enter your search keyword here"
            style={{ width: "20%", marginTop: 15 }}
          />

          <Dropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleDropdown}
          >
            <DropdownToggle caret color="success" style={{ margin: 15 }}>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
        <Row
          style={{
            width: "95%",
            marginLeft: 20,
            maxHeight: intViewportHeight * 0.55,
            overflow: "scroll"
          }}
        >
          <BootstrapTable
            keyField="id"
            data={products}
            columns={columns}
            striped={true}
            bordered={true}
            hover={true}
          />
        </Row>
      </TabPane>
    );
  }
}
