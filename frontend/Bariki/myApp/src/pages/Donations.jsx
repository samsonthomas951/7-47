// import "../styles/Donations.css";
// import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { Chart, registerables } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import { useEffect, useRef } from "react";

// Chart.register(...registerables, ChartDataLabels);

// const Donations = () => {

//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     const myChartRef = chartRef.current.getContext('2d');

//     chartInstance.current = new Chart(myChartRef, {
//       type: "pie",
//       data: {
//         datasets: [
//           {
//             data: [25, 75],
//             backgroundColor: [
//               'rgb(183, 205, 255)',
//               // 'rgb(54, 162, 235)',
//               // 'rgb(255, 205, 86)'
//             ], 
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           datalabels: {
//             color: '#02101E',
//             formatter: (value, context) => {
//               const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
//               const percentage = (value / total * 100).toFixed(1) + '%';
//               return percentage;
//             },
//             font: {
//               weight: 'bold',
//             },
//           },
//         },
//       },
//     });

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <main className="MainSection">
//       <section className="galaxy">

//         {/* Column1 */}
//         <div className="column1">
//           <img src="/Donations.png" alt="img" id="imgDonations" />
          
//           <div className="mySupportBtn">
//             <button className="mySupportBtn">Support Bariki</button>
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="column2">
//           <div className="BackBtn">
//             <Link to="/">
//               <button>Back Home</button>
//             </Link>
//           </div>

//           <p className="star">Donate to who I want</p>

//           <div className="mt-5 searchbar">
//             <form>
//               <input
//                 type="text"
//                 placeholder="Type prompt here"
//                 className="InputSearch"
//               />
//             </form>
//             <CiSearch className="ml-[26.7rem] mt-[-1.8rem] font-bold" />
//           </div>

//           <p className="moon">Donate how I want</p>
          
//           <div className="pieChartContainer">
//             <div className="pieChart">
//               <canvas ref={chartRef} className=""/>
//             </div>
//           </div>

//           <div className="myAdministrativeBtn1">
//             <button className="myAdministrativeBtn">Administrative</button>
//           </div>

//           <div className="myAidBtn2">
//             <button className="myAidBtn">Aid</button>
//           </div>
          
//           <Link to="/CustomerDonation">
//           <div className="myCompleteMyDonationBtn2">
//             <button className="myCompleteMyDonationBtn">Complete My Donation</button>
//           </div>
//           </Link>
         

//         </div>
//       </section>
//     </main>
//   );
// };

// export default Donations;

import React, { useState, useEffect, useRef } from "react";
import "../styles/Donations.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';

Chart.register(...registerables, ChartDataLabels);

const Donations = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [25, 75],
            backgroundColor: ['rgb(183, 205, 255)'],
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            color: '#02101E',
            formatter: (value, context) => {
              const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = (value / total * 100).toFixed(1) + '%';
              return percentage;
            },
            font: {
              weight: 'bold',
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setMessages(prevMessages => [...prevMessages, { sender: "user", text: userInput }]);
    setShowChat(true);

    try {
      const response = await axios.post('http://localhost:8000/process-input/', { input: userInput });
      setMessages(prevMessages => [...prevMessages, { sender: "ai", text: response.data }]);
    } catch (error) {
      console.error("Error sending request:", error);
      setMessages(prevMessages => [...prevMessages, { sender: "ai", text: "Error processing request. Please try again." }]);
    }

    setUserInput("");
  };

  const renderChatInterface = () => (
    <div className="chat-interface">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "user" ? "user-message" : "ai-message"}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type prompt here"
          className="chat-input"
        />
        <button type="submit" className="chat-submit-btn">
          <CiSearch />
        </button>
      </form>
    </div>
  );

  const renderDonationInterface = () => (
    <>
      <p className="star">Donate to who I want</p>
      <div className="mt-5 searchbar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type prompt here"
            className="InputSearch"
            value={userInput}
            onChange={handleInputChange}
          />
        </form>
        <CiSearch className="ml-[26.7rem] mt-[-1.8rem] font-bold" onClick={handleSubmit} />
      </div>
      <p className="moon">Donate how I want</p>
      <div className="pieChartContainer">
        <div className="pieChart">
          <canvas ref={chartRef} />
        </div>
      </div>
      <div className="myAdministrativeBtn1">
        <button className="myAdministrativeBtn">Administrative</button>
      </div>
      <div className="myAidBtn2">
        <button className="myAidBtn">Aid</button>
      </div>
      <Link to="/CustomerDonation">
        <div className="myCompleteMyDonationBtn2">
          <button className="myCompleteMyDonationBtn">Complete My Donation</button>
        </div>
      </Link>
    </>
  );

  return (
    <main className="MainSection">
      <section className="galaxy">
        <div className="column1">
          <img src="/Donations.png" alt="img" id="imgDonations" />
          <div className="mySupportBtn">
            <button className="mySupportBtn">Support Bariki</button>
          </div>
        </div>
        <div className="column2">
          <div className="BackBtn">
            <Link to="/">
              <button>Back Home</button>
            </Link>
          </div>
          {showChat ? renderChatInterface() : renderDonationInterface()}
        </div>
      </section>
    </main>
  );
};

export default Donations;