import React, { Component } from 'react';
import logo from './logo.svg';
import ChatWindow from './ChatWindow.js';
import './App.css';

class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }
  
  AddNewMessage = newMessage => {
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage],
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow data={this.state} user={this.state.users[0].username} onChatWindow={this.AddNewMessage}/>
          <ChatWindow data={this.state} user={this.state.users[1].username} onChatWindow={this.AddNewMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
