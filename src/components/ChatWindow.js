import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { sendMessage } from "../services/api";
import "./ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);
    try {
      const response = await sendMessage(input);
      const assistantMessage = { sender: "assistant", text: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
