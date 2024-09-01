import {Routes, Route} from "react-router-dom"
import Donations from "./pages/Donations";
import LandingPage from "./pages/LandingPage";
import CustomerDonation from "./pages/CustomerDonation";
import CustomerDonationLastPage from "./pages/CustomerDonationLastPage";
import DonateAgain from "./pages/DonateAgain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Donations" element={<Donations/>}/>
        <Route path="/CustomerDonation" element={<CustomerDonation/>}/>
        <Route path="/CustomerDonationLastPage" element={<CustomerDonationLastPage/>}/>
        <Route path="/DonateAgain" element={<DonateAgain/>}/>
        
       
      </Routes>
    </>
  );
}
export default App;
