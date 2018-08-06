import React from "react";
import { TabContent, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DeviceTab from "./DeviceTab";
import StudentTab from "./StudentTab";
import CellTab from "./CellTab";
import LayoutTab from "./LayoutTab";

export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs fill>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggleTab("1");
              }}
            >
              裝置
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggleTab("2");
              }}
            >
              學生
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggleTab("3");
              }}
            >
              小組
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ backgroundColor: "#4BB543", marginRight: 1 }}
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggleTab("4");
              }}
            >
              DEP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ backgroundColor: "#4BB543", marginLeft: 1 }}
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggleTab("5");
              }}
            >
              APP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggleTab("6");
              }}
            >
              Layout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggleTab("7");
              }}
            >
              Self Service
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "8" })}
              onClick={() => {
                this.toggleTab("8");
              }}
            >
              設定檔
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "9" })}
              onClick={() => {
                this.toggleTab("9");
              }}
            >
              Web Clip
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "10" })}
              onClick={() => {
                this.toggleTab("10");
              }}
            >
              書本
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "11" })}
              onClick={() => {
                this.toggleTab("11");
              }}
            >
              Parent
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "12" })}
              onClick={() => {
                this.toggleTab("12");
              }}
            >
              指南
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "13" })}
              onClick={() => {
                this.toggleTab("13");
              }}
            >
              操作記錄
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "14" })}
              onClick={() => {
                this.toggleTab("14");
              }}
            >
              設定
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="tabContent">
          <DeviceTab dropdownOpen={this.state.dropdownOpen} />
          <StudentTab />
          <CellTab />
          <LayoutTab />
        </TabContent>
      </div>
    );
  }
}
