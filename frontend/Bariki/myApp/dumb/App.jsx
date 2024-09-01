import {Routes, Route} from "react-router-dom"




//import Home from "./components/pages/Home";
import Donations from "./components/pages/Donations";
import LandingPage from "./components/pages/LandingPage";
import CustomerDonation from "./components/pages/CustomerDonation";
import CustomerDonationLastPage from "./components/pages/CustomerDonationLastPage";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Donations" element={<Donations/>}/>
        <Route path="/CustomerDonation" element={<CustomerDonation/>}/>
        <Route path="/CustomerDonationLastPage" element={<CustomerDonationLastPage/>}/>
        
       
      </Routes>
    </>
  );
}
export default App;
