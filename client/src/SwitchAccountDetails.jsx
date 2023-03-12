import { useGlobalContext } from "./context/GlobalContext";
import Sidebar from "./Sidebar";

const SwitchAccountDetails = () => {
  const { changePage } = useGlobalContext();
  return (
    <section>
      <Sidebar />
      <div className="section-center">
        <div className="pagetitle">SwitchAccount Details</div>
        <div className="account-details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            sint laudantium inventore, provident enim beatae, non possimus
            tenetur iure magnam, iste aliquid vero praesentium ut quisquam. Rem
            nam iure quisquam.
          </p>
        </div>
        <button className="nav-btn" onClick={changePage}>
          Next
        </button>
      </div>
    </section>
  );
};

export default SwitchAccountDetails;
