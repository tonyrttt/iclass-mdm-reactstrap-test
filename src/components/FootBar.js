import React from "react";
import { Button, Media } from "reactstrap";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FootBar extends React.Component {
  render() {
    return (
      <div style={{ justifyContent: "flex-end" }}>
        <Media className="media">
          <Button color="danger" style={{ margin: 5 }}>
            Hide
          </Button>
          <Media left top href="#">
            <Media
              object
              src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 5 }}
            />
          </Media>
          <Media left top href="#">
            <Media
              object
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 5 }}
            />
          </Media>
          <Media left top href="#">
            <Media
              object
              src="https://png.pngtree.com/element_origin_min_pic/16/09/08/0057d0420c31e61.jpg"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 5 }}
            />
          </Media>
          <Media left top href="#">
            <Media
              object
              src="http://portal.iclass.hk/sas/assets/img/mdm_logo.png"
              alt="Generic placeholder image"
              style={{ width: 50, margin: 5 }}
            />
          </Media>
        </Media>
      </div>
    );
  }
}
