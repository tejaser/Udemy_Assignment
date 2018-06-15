import React from "react";
import ReactDOM from "react-dom";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import "./styles.css";

class App extends React.Component {
  state = {
    username: "tejas_pancholi"
  };
  userNameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <UserInput
          currentName={this.state.username}
          changed={this.userNameChangeHandler}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={"Wayde Watts"} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
