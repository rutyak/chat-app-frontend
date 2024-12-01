import React from "react";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Financial Assistant</h1>
        <p>Your go-to assistant for financial insights and support</p>
      </header>
      <main className="app-main">
        <ChatWindow />
      </main>
      <footer className="app-footer">
        <p>© 2024 AI Financial Assistant | Powered by ChatGPT</p>
      </footer>
    </div>
  );
};

export default App;
