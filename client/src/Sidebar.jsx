import { useGlobalContext } from "./context/GlobalContext";

const Sidebar = () => {
  const { currentPage } = useGlobalContext();
  return (
    <div className="sidebar">
      <div className="sidebar-center">
        <h3
          className={`sidebar-elements ${
            currentPage === 1 && "sidebar-changecolor"
          }`}
        >
          Account Details
        </h3>
        <h3
          className={`sidebar-elements ${
            currentPage === 2 && "sidebar-changecolor"
          }`}
        >
          Customer Summary
        </h3>
        <h3
          className={`sidebar-elements ${
            currentPage === 3 && "sidebar-changecolor"
          }`}
        >
          Switch Account Details
        </h3>
        <h3
          className={`sidebar-elements ${
            currentPage === 4 && "sidebar-changecolor"
          }`}
        >
          Payment Arrangement
        </h3>
        <h3
          className={`sidebar-elements ${
            currentPage === 5 && "sidebar-changecolor"
          }`}
        >
          Interview Summary
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
