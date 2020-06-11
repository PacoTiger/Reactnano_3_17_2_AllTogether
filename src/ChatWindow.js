import React, { Component } from 'react';
import SendMessage from './SendMessage.js';

class ChatWindow extends Component {
    render() {
        const {data, user} = this.props
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user}</div>
                    <ul className="message-list">
                    {data.messages.map((message, index) => (
                        <li
                        key={index}
                        className={
                            message.username === user ? 'message sender' : 'message recipient'
                        }
                        >
                        <p>{`${message.username}: ${message.text}`}</p>
                        </li>
                    ))}
                    </ul> 
                    <SendMessage onSendMessage={this.props.onChatWindow} user={user}/>
            </div>  
        );    
    }  
};

export default ChatWindow;