import React, { Component } from "react";

//Contollred Component
class SendMessageForm extends Component {
  state = {
    text: ""
  };

  isDisabled = () => {
    const { text } = this.state;

    if (text.length > 0) {
      return false;
    }
    return true;
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  sendNewMessage = event => {
    event.preventDefault();

    const { text } = this.state;
    const { username, onSendMessage } = this.props;

    onSendMessage({ username: username, text: text });

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <form className="input-group" onSubmit={this.sendNewMessage}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.handleChange}
            value={text}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// const isDisabled = (e) => {
//     return true;
//   };

// const SendMessageForm = props => {
//     return(<div>
//         <form className="input-group">
//           <input type="text" className="form-control" placeholder="Enter your message..." />
//           <div className="input-group-append">
//             <button className="btn submit-button" disabled={isDisabled.call(null)}>
//               SEND
//             </button>
//           </div>
//         </form>
//       </div>);
// }

export default SendMessageForm;
