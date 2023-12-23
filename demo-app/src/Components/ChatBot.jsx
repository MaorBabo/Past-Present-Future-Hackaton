import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      // Add the user's message to the list of messages
      setMessages([...messages, { text: newMessage, sender: 'user' }]);

      try {
        // Send a POST request to the backend server with the message
        const response = await axios.post('http://localhost:5000/api/bard', {
          text: newMessage,
        });
        console.log(response);
        // Display the server's response in the chat
        setMessages([...messages, { text: response.data, sender: 'otherUser' }]);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error.message);
      }
    }
  };

  return (
    <div className="chat-bottom">
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="chat-container">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <span className="message-text">{message.text}</span>
                </div>
              ))}
            </div>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{ backgroundColor: '#48d1cc' }}
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
