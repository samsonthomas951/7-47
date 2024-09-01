import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ChatFeed, Message } from "react-chat-ui";

const App = () => {
  const [messages, setMessages] = useState([
    new Message({
      id: 1,
      message: "I'm the recipient! (The person you're talking to)"
    }), // Gray bubble
    new Message({ id: 0, message: "I'm you -- the blue bubble!" }) // Blue bubble
  ]);
  const [is_typing, setTyping] = useState(true);

  return (
    <ChatFeed
      messages={messages} // Boolean: list of message objects
      isTyping={is_typing} // Boolean: is the recipient typing
      hasInputField={false} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
      // JSON: Custom bubble styles
      bubbleStyles={{
        text: {
          fontSize: 30
        },
        chatbubble: {
          borderRadius: 70,
          padding: 40
        }
      }}
    />
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);