//import React from 'react'

import "../styles/DonateAgain.css"
import { Link } from "react-router-dom";
const DonateAgain = () => {
  return (
    <>
    <main id="MainDiv1">
        <section className="galaxy31">
        {/* COlumn1*/}
            <div id="COlUMN11">
            
                <img src="/DonateAgain.png" alt="img" id="CustomerDonationImg21" />
            </div>

             {/* COlumn2 */}
            <div id="COlUMN21">
            <div className="GoBackBtn21">
            
            <Link to="/">
              <button>Back Home</button>
            </Link>
          </div>
         
         <div>
            <p className="CaptionT">Thank You</p>
         </div>

          {/* Form */}
          <div className="formData21">

          <Link><p className="receipts">
          Get donation receipts and reports
          </p></Link>
            <form>
               
                <input type="email" name="" placeholder="Email" className="Inputs31" required />
                <button type="submit" className="SubmitBtns1">Donate</button>
            </form>
          </div>
          <div>
            <p className="DonateCharity21">Donate To Charity Abc</p>
          </div>
            </div> 
        </section>
    </main>
      
    </>
  )
}

export default DonateAgain
