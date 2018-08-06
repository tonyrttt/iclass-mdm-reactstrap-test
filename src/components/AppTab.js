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
var intViewportHeight = window.innerHeight;
var intViewportWidth = window.innerWidth;

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "16"
    };
  }
  render() {
    return (
      <TabContent activeTab={this.props.activeTab} className="tabContent">
        <TabPane tabId="16">
          <Row>
            <Col sm="12">
              <ListGroup
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  overflow: "scroll",
                  maxHeight: intViewportHeight * 0.5
                }}
              >
                <ListGroupItem
                  style={{
                    border: 0,
                    marginBottom: -12
                  }}
                >
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/bluetooth.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Bluetooth(iOS10)
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/siri.jpg"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Siri
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/appstore.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      App Store
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/safari.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Safari
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/safari.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Javascript
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/safari.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Safari
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/safari.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Javascript
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/safari.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Safari
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="http://portal.iclass.hk/images/mdm/safari.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Javascript
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="17">
          <Row>
            <Col sm="12">
              <ListGroup
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  overflow: "scroll",
                  maxHeight: intViewportHeight * 0.5
                }}
              >
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/d2/cf/1e/d2cf1e56-a429-c4cb-e973-c53f01176bdb/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/246x0w.jpg"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      音樂
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybQ5RGzdcJ7aLaqCJcWZjoPozY2MnEDBgzVZidjSDjR2hzJdkuw"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      日歷
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios10-clock-app-icon.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      時鐘
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3fm98BypdOO0yppo2s7EShKf2Mx8BAm5Ebl7vkKA0MHglGTnFg"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Contact
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem style={{ border: 0, marginBottom: -12 }}>
                  <Row>
                    <Col sm="2" md="2">
                      <img
                        src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/Product_Help/en_US/PUBLIC_USERS/PP494/AppIconDefault_FMF_1.png"
                        style={{ width: 30 }}
                        alt=""
                      />
                    </Col>
                    <Col sm="5" md="5" style={{ marginTop: 5 }}>
                      Find Friend
                    </Col>
                    <Col sm="5" md="5">
                      <ButtonGroup>
                        <Button color="danger">鎖定</Button>
                        <Button color="success">解鎖</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    );
  }
}
