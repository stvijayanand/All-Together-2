import React from "react";
import PropTypes from "prop-types";
import SendMessageForm from "./SendMessageForm";
import MessageList from "./MessageList";

const ChatWindow = props => {
  const { username, messages, onSendMessage } = props;

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{username}</div>

      <MessageList username={username} messages={messages} />

      <SendMessageForm username={username} onSendMessage={onSendMessage} />
    </div>
  );
};

ChatWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default ChatWindow;
