// import React, { useState } from "react";
// import "../styles/CustomerDonation.css";
// import { Link } from "react-router-dom";

// const CustomerDonation = () => {
//   const [paymentMethod, setPaymentMethod] = useState("card"); // state to manage which form to show

//   // Function to toggle between Card and Mpesa
//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   return (
//     <>
//       <main id="Mainsection">
//         <section className="galaxy2">
//           {/* COlumn1 */}
//           <div id="COlumn1">
//             <img
//               src="/CustomerDonation.png"
//               alt="img"
//               id="CustomerDonationImg"
//             />

//             <Link to="/CustomerDonationLastPage">
//               <div className="CharityBtn">
//                 <button className="myCharityBtn">Charity ABC</button>
//               </div>
//             </Link>
//           </div>

//           {/* COlumn2 */}
//           <div id="COlumn2">
//             <div className="GoBackBtn">
//               <Link to="/Donations">
//                 <button>Go Back</button>
//               </Link>
//             </div>

//             {/* Navbar (card/mpesa) */}
//             <nav className="nav">
//               <div
//                 className={`label1 ${paymentMethod === "card" ? "active" : ""}`}
//                 onClick={() => handlePaymentMethodChange("card")}
//               >
//                 Card
//               </div>
//               <div
//                 className={`label2 ${
//                   paymentMethod === "mpesa" ? "active" : ""
//                 }`}
//                 onClick={() => handlePaymentMethodChange("mpesa")}
//               >
//                 Mpesa
//               </div>
//             </nav>

//             {/* Form: Render the appropriate form based on the selected payment method */}
//             <div className="formData">
//               {paymentMethod === "card" ? (
//                 <form>
//                   <input
//                     type="number"
//                     placeholder="Card Number"
//                     className="Inputs"
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="CVV"
//                     className="Inputs"
//                     required
//                   />
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Month"
//                       className="Inputs1"
//                       required
//                     />
//                     <input
//                       type="text"
//                       placeholder="Year"
//                       className="Inputs2"
//                       required
//                     />
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Amount"
//                     className="Inputs"
//                     required
//                   />
//                   <button type="submit" className="SubmitBtn">
//                     Donate
//                   </button>
//                 </form>
//               ) : (
//                 <form>
//                   <input
//                     type="text"
//                     placeholder="Mpesa Number"
//                     className="Inputs"
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Amount"
//                     className="Inputs"
//                     required
//                   />
//                   <button type="submit" className="SubmitBtn">
//                     Donate
//                   </button>
//                 </form>
//               )}
//             </div>

//             <div>
//               <p className="DonateCharity">Donate To Charity Abc</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default CustomerDonation;

import React, { useState } from "react";
import "../styles/CustomerDonation.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios to send data to backend

const CustomerDonation = () => {
  const [paymentMethod, setPaymentMethod] = useState("card"); // state to manage which form to show
  const [mpesaNumber, setMpesaNumber] = useState(""); // State to store Mpesa Number
  const [amount, setAmount] = useState(""); // State to store amount
  const [errorMessage, setErrorMessage] = useState("");

  // Function to toggle between Card and Mpesa
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Function to handle Mpesa form submission
  const handleMpesaSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!mpesaNumber || !amount) {
      setErrorMessage("Please enter all details.");
      return;
    }

    try {
      // Sending data to Django backend
      const response = await axios.post("http://localhost:8000/process-mpesa/", {
        mpesa_number: mpesaNumber,
        amount: amount,
      });

      // Handle successful response
      console.log("Donation successful:", response.data);
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error("Error processing the Mpesa donation:", error);
      setErrorMessage("There was an error processing your donation.");
    }
  };

  return (
    <>
      <main id="Mainsection">
        <section className="galaxy2">
          {/* COlumn1 */}
          <div id="COlumn1">
            <img
              src="/CustomerDonation.png"
              alt="img"
              id="CustomerDonationImg"
            />

            <Link to="/CustomerDonationLastPage">
              <div className="CharityBtn">
                <button className="myCharityBtn">Charity ABC</button>
              </div>
            </Link>
          </div>

          {/* COlumn2 */}
          <div id="COlumn2">
            <div className="GoBackBtn">
              <Link to="/Donations">
                <button>Go Back</button>
              </Link>
            </div>

            {/* Navbar (card/mpesa) */}
            <nav className="nav">
              <div
                className={`label1 ${paymentMethod === "card" ? "active" : ""}`}
                onClick={() => handlePaymentMethodChange("card")}
              >
                Card
              </div>
              <div
                className={`label2 ${
                  paymentMethod === "mpesa" ? "active" : ""
                }`}
                onClick={() => handlePaymentMethodChange("mpesa")}
              >
                Mpesa
              </div>
            </nav>

            {/* Form: Render the appropriate form based on the selected payment method */}
            <div className="formData">
              {paymentMethod === "card" ? (
                <form>
                  <input
                    type="number"
                    placeholder="Card Number"
                    className="Inputs"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="Inputs"
                    required
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Month"
                      className="Inputs1"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      className="Inputs2"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Amount"
                    className="Inputs"
                    required
                  />
                  <button type="submit" className="SubmitBtn">
                    Donate
                  </button>
                </form>
              ) : (
                <form onSubmit={handleMpesaSubmit}>
                  <input
                    type="text"
                    placeholder="Mpesa Number"
                    className="Inputs"
                    value={mpesaNumber}
                    onChange={(e) => setMpesaNumber(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Amount"
                    className="Inputs"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                  <button type="submit" className="SubmitBtn">
                    Donate
                  </button>
                </form>
              )}
            </div>

            {errorMessage && <p className="error">{errorMessage}</p>}

            <div>
              <p className="DonateCharity">Donate To Charity Abc</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CustomerDonation;
