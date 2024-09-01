import Nav from "../components/NavBar.jsx";
import Bar from "../components/ProgressBar.jsx";
import Donations from "../components/Donations.jsx";
import StatusReport from "../components/StatusReport.jsx";
function dashboard() {
  return (
    <>
      <Nav />
      <Bar progress={10} />
      <Donations />
      <StatusReport />
    </>
  );
}
export default dashboard;
