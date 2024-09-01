//import React from 'react'

import "../styles/CustomerDonationLastPage.css"
import { Link } from "react-router-dom";
const CustomerDonationLastPage = () => {
  return (
    <>
     <main id="MainDiv">
        <section className="galaxy3">
        {/* COlumn1*/}
            <div id="COlUMN1">
            
                <img src="/CustomerDonation.png" alt="img" id="CustomerDonationImg2" />
                
                <Link to="/DonateAgain">
                <div className="CharityBtn2">
                    <button className="myCharityBtn2">Charity ABC</button>
                </div>
                </Link>
                
            


            </div>

             {/* COlumn2 */}
            <div id="COlUMN2">
            <div className="GoBackBtn2">
            
            <Link to="/CustomerDonation">
              <button>Go Back</button>
            </Link>
          </div>
          {/* navbar (card/mpesa) */}
          <nav className="navbarS">
            <div className="label3">Card</div>
            <div className="label4">Mpesa</div>
          </nav>

          {/* Form */}
          <div className="formData2">
            <form>
                <input type="number" name="" placeholder="Card Number" className="Inputs3" required />
                <input type="text" name="" placeholder="Amount" className="Inputs3" required />
                <button type="submit" className="SubmitBtns">Donate</button>
            </form>
          </div>
          <div>
            <p className="DonateCharity2">Donate To Charity Abc</p>
          </div>
            </div> 
        </section>
    </main>
      
      
    </>
  )
}

export default CustomerDonationLastPage
