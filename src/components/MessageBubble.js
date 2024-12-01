import React from "react";
import "./MessageBubble.css";

const MessageBubble = ({ sender, text }) => {
  const bubbleClass = sender === "user" ? "user-bubble" : "assistant-bubble";

  return (
    <div className={`message-bubble ${bubbleClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default MessageBubble;
