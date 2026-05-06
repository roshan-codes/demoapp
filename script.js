* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", sans-serif;
  }
  
  body {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .chat-container {
    width: 360px;
    height: 600px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .chat-header {
    background: #4facfe;
    color: #fff;
    padding: 15px;
    text-align: center;
    font-weight: bold;
  }
  
  .chat-box {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    background: #f5f7fb;
  }
  
  .message {
    margin: 10px 0;
    display: flex;
  }
  
  .message.user {
    justify-content: flex-end;
  }
  
  .bubble {
    max-width: 70%;
    padding: 10px 14px;
    border-radius: 15px;
    font-size: 14px;
  }
  
  .user .bubble {
    background: #4facfe;
    color: white;
    border-bottom-right-radius: 5px;
  }
  
  .bot .bubble {
    background: #e4e6eb;
    color: #333;
    border-bottom-left-radius: 5px;
  }
  
  .chat-input {
    display: flex;
    border-top: 1px solid #ddd;
  }
  
  .chat-input input {
    flex: 1;
    padding: 12px;
    border: none;
    outline: none;
  }
  
  .chat-input button {
    background: #4facfe;
    color: white;
    border: none;
    padding: 0 18px;
    cursor: pointer;
  }
  
  .chat-input button:hover {
    background: #3a8be0;
  }
