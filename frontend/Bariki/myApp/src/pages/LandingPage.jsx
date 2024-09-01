// import React, { useState } from "react";
// import "../styles/Home.css";
// import { IoMicOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const Home = () => {
//   const [sideBar, SetSideBar] = useState(false);
//   const [userInput, setUserInput] = useState(""); // State for user input
//   const [messages, setMessages] = useState([]); // State for storing chat messages

//   const toggleFunctionality = () => {
//     SetSideBar(!sideBar);
//   };

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   // Function to handle form submission
//   const handleSubmit = async () => {
//     if (!userInput.trim()) return; // Prevent empty submissions

//     // Add the user's message to the chat
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { sender: "user", text: userInput }
//     ]);

//     try {
//       // Send the user input to the Django backend
//       const response = await axios.post('http://localhost:8000/process-input/', {
//         input: userInput
//       });

//       // Add the AI response to the chat
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: "ai", text: response.data }
//       ]);
//     } catch (error) {
//       console.error("Error sending request:", error);
//       // You can also add an error message to the chat if needed
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: "ai", text: "Error processing request. Please try again." }
//       ]);
//     }

//     // Clear the input field
//     setUserInput("");
//   };

//   // Function to detect Enter key press
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit(); // Trigger form submission on Enter
//     }
//   };

//   return (
//     <>
//       <div className="container-full">
//         <nav className="header-1">
//           <Link to="/Donations"><button className="mybtn">Donate Different</button></Link>
//         </nav>
//         <nav className="header-2">
//           <div className="hamburger-container">
//             <div
//               className={`hamburger ${sideBar ? "hide" : ""}`}
//               onClick={toggleFunctionality}
//             ></div>
//           </div>
//         </nav>
//         <div className="main">
//           <section className="section-1">
//             <img src="/logo.png" alt="logo" />
//             <p className="logoCaption">micro-donate to charity</p>
//             <Link to="/Donations"><button className="mydonatebtn">Donate Different</button></Link>
//           </section>
//           <section className="section-2">
//             <div className="cards">
//               <div className="card">
//                 <img src="/info.svg" alt="info icon" />
//                 <p>What is Bariki and why should I donate using it</p>
//               </div>
//               <div className="card">
//                 <img src="/compass.svg" alt="info icon" />
//                 <p>Suggest a charity for me to donate to</p>
//               </div>
//               <div className="card">
//                 <img src="/globe.svg" alt="info icon" />
//                 <p>I want to learn about the 17 UN SDGs</p>
//               </div>
//             </div>

//             {/* Chat UI */}
//             <div className="chat-container">
//               <div className="chat-box">
//                 {messages.map((message, index) => (
//                   <div
//                     key={index}
//                     className={`message ${message.sender === "user" ? "user-message" : "ai-message"}`}
//                   >
//                     {message.text}
//                   </div>
//                 ))}
//               </div>

//               <div className="input">
//                 <input 
//                   type="text" 
//                   placeholder="Type prompt here" 
//                   value={userInput} 
//                   onChange={handleInputChange} // Update state when input changes
//                   onKeyPress={handleKeyPress} // Listen for Enter key press
//                 />
//                 <IoMicOutline className="mic" onClick={handleSubmit} /> {/* Submit when mic icon is clicked */}
//               </div>
//             </div>
//           </section>
//         </div>

//         {sideBar && (
//           <aside className="sideBarMenu">
//             <section className="section-top">
//               <div className="times-icon" onClick={toggleFunctionality}></div>
//               <h1>Explore SDGs</h1>
//             </section>
//             <ul id="sideListData">
//               <li>No poverty</li>
//               <li>Zero Hunger</li>
//               <li>Good Health...</li>
//               <li>Quality Education</li>
//               <li>Gender Equality</li>
//               <li>Clean Water</li>
//               <li>Affordable and...</li>
//               <li>Decent Work...</li>
//             </ul>
//             <div className="image">
//               <img src="/sdg.png" alt="sdg" width="100" />
//             </div>
//           </aside>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import "../styles/Home.css";
// import { IoMicOutline } from "react-icons/io5";
// import axios from 'axios';

// const Home = () => {
//   const [sideBar, setSideBar] = useState(false);
//   const [userInput, setUserInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'chat'

//   const toggleSidebar = () => {
//     setSideBar(!sideBar);
//   };

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = async () => {
//     if (!userInput.trim()) return;

//     setMessages(prevMessages => [...prevMessages, { sender: "user", text: userInput }]);
//     setCurrentView('chat');

//     try {
//       const response = await axios.post('http://localhost:8000/process-input/', { input: userInput });
//       setMessages(prevMessages => [...prevMessages, { sender: "ai", text: response.data }]);
//     } catch (error) {
//       console.error("Error sending request:", error);
//       setMessages(prevMessages => [...prevMessages, { sender: "ai", text: "Error processing request. Please try again." }]);
//     }

//     setUserInput("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   const handleCardClick = (cardText) => {
//     setUserInput(cardText);
//     handleSubmit();
//   };

//   const renderLandingView = () => (
//     <section className="section-2">
//       <div className="cards">
//         {[
//           { icon: "/info.svg", text: "What is Bariki and why should I donate using it" },
//           { icon: "/compass.svg", text: "Suggest a charity for me to donate to" },
//           { icon: "/globe.svg", text: "I want to learn about the 17 UN SDGs" }
//         ].map((card, index) => (
//           <div key={index} className="card" onClick={() => handleCardClick(card.text)}>
//             <img src={card.icon} alt="icon" />
//             <p>{card.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

//   const renderChatView = () => (
//     <section className="section-2">
//       <div className="chat-container">
//         <div className="chat-box">
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.sender === "user" ? "user-message" : "ai-message"}`}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <div className="container-full">
//       <nav className="header-1">
//         <button className="mybtn" onClick={() => setCurrentView('landing')}>Donate Different</button>
//       </nav>
//       <nav className="header-2">
//         <div className="hamburger-container">
//           <div className={`hamburger ${sideBar ? "hide" : ""}`} onClick={toggleSidebar}></div>
//         </div>
//       </nav>
//       <div className="main">
//         <section className="section-1">
//           <img src="/logo.png" alt="logo" />
//           <p className="logoCaption">micro-donate to charity</p>
//           <button className="mydonatebtn" onClick={() => setCurrentView('landing')}>Donate Different</button>
//         </section>
//         {currentView === 'landing' ? renderLandingView() : renderChatView()}
//       </div>
//       <div className="input">
//         <input 
//           type="text" 
//           placeholder="Type prompt here" 
//           value={userInput} 
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//         />
//         <IoMicOutline className="mic" onClick={handleSubmit} />
//       </div>
//       {sideBar && (
//         <aside className="sideBarMenu">
//           <section className="section-top">
//             <div className="times-icon" onClick={toggleSidebar}></div>
//             <h1>Explore SDGs</h1>
//           </section>
//           <ul id="sideListData">
//             <li>No poverty</li>
//             <li>Zero Hunger</li>
//             <li>Good Health...</li>
//             <li>Quality Education</li>
//             <li>Gender Equality</li>
//             <li>Clean Water</li>
//             <li>Affordable and...</li>
//             <li>Decent Work...</li>
//           </ul>
//           <div className="image">
//             <img src="/sdg.png" alt="sdg" width="100" />
//           </div>
//         </aside>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import "../styles/Home.css";
import { IoMicOutline } from "react-icons/io5";
import axios from 'axios';

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'chat'

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    setMessages(prevMessages => [...prevMessages, { sender: "user", text: userInput }]);
    setCurrentView('chat');

    try {
      const response = await axios.post('http://localhost:8000/process-input/', { input: userInput });
      setMessages(prevMessages => [...prevMessages, { sender: "ai", text: response.data }]);
    } catch (error) {
      console.error("Error sending request:", error);
      setMessages(prevMessages => [...prevMessages, { sender: "ai", text: "Error processing request. Please try again." }]);
    }

    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleCardClick = (cardText) => {
    setUserInput(cardText);
    handleSubmit();
  };

  const renderLandingView = () => (
    <>
      <section className="section-1">
        <img src="/logo.png" alt="logo" />
        <p className="logoCaption">micro-donate to charity</p>
        <button className="mydonatebtn">Donate Different</button>
      </section>
      <section className="section-2">
        <div className="cards">
          {[
            { icon: "/info.svg", text: "What is Bariki and why should I donate using it" },
            { icon: "/compass.svg", text: "Suggest a charity for me to donate to" },
            { icon: "/globe.svg", text: "I want to learn about the 17 UN SDGs" }
          ].map((card, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(card.text)}>
              <img src={card.icon} alt="icon" />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderChatView = () => (
    <div className="chat-container full-page">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "user" ? "user-message" : "ai-message"}`}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`container-full ${currentView === 'chat' ? 'chat-active' : ''}`}>
      <nav className="header-1">
        <button className="mybtn" onClick={() => setCurrentView('landing')}>Donate Different</button>
      </nav>
      <nav className="header-2">
        <div className="hamburger-container">
          <div className={`hamburger ${sideBar ? "hide" : ""}`} onClick={toggleSidebar}></div>
        </div>
      </nav>
      <div className="main">
        {currentView === 'landing' ? renderLandingView() : renderChatView()}
      </div>
      <div className="input">
        <input 
          type="text" 
          placeholder="Type prompt here" 
          value={userInput} 
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <IoMicOutline className="mic" onClick={handleSubmit} />
      </div>
      {sideBar && (
        <aside className="sideBarMenu">
          <section className="section-top">
            <div className="times-icon" onClick={toggleSidebar}></div>
            <h1>Explore SDGs</h1>
          </section>
          <ul id="sideListData">
            <li>No poverty</li>
            <li>Zero Hunger</li>
            <li>Good Health...</li>
            <li>Quality Education</li>
            <li>Gender Equality</li>
            <li>Clean Water</li>
            <li>Affordable and...</li>
            <li>Decent Work...</li>
          </ul>
          <div className="image">
            <img src="/sdg.png" alt="sdg" width="100" />
          </div>
        </aside>
      )}
    </div>
  );
};

export default Home;