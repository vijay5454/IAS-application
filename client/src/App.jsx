import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./App.css";
import AccountDetails from "./AccountDetails";
import InterviewSummary from "./InterviewSummary";
import CustomerSummary from "./CustomerSummary";
import PaymentArrangement from "./PaymentArrangement";
import SwitchAccountDetails from "./SwitchAccountDetails";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { currentPage } = useGlobalContext();
  return (
    <main>
      <Navbar />
      {currentPage === 1 && <AccountDetails />}
      {currentPage === 2 && <CustomerSummary />}
      {currentPage === 3 && <SwitchAccountDetails />}
      {currentPage === 4 && <PaymentArrangement />}
      {currentPage === 5 && <InterviewSummary />}
    </main>
  );
}

export default App;
