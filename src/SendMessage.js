import React, { Component } from 'react';

class SendMessage extends Component {
  state = {
    message: { 
               username: this.props.user, 
               text: '' } 
  }

  isDisabled = () => {
    return this.state.message.text === '';
  }; 

  handleSubmit = event => {
      event.preventDefault();
      this.props.onSendMessage(this.state.message);
      this.mainInput.value = "";
  }

   handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(currState => ({
      message: {
        username: currState.message.username,
        text: value,
      },
    }));
  }

  render() {
    return (
    <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
            <input ref={(ref) => this.mainInput= ref}
                   type="text" 
                   className="form-control" 
                   placeholder="Enter your message..." 
                   onChange={this.handleInputChange}/>
            <div className="input-group-append">
            <button className="btn submit-button" 
                    disabled={this.isDisabled()}>
                SEND
            </button>
            </div>
        </form>
    </div>
    )
  }
}

export default SendMessage;
