import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TabList from "./components/TabList";
import FootBar from "./components/FootBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p />
        <TabList />
        <FootBar />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
