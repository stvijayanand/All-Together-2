import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

class App extends Component {
  state = {
    messages: []
  };

  updateMessagesList = (username, text) => {
    const message = {
      ["username"]: username,
      ["text"]: text
    };

    this.setState(currentState => ({
      messages: [...currentState.messages, message]
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              username={user.username}
              messages={messages}
              onSendMessage={this.updateMessagesList}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
