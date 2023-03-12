import { useGlobalContext } from "./context/GlobalContext";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const { currentPage } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <span className="icon">
          <VscThreeBars />
        </span>
        <span className="title">Lloyds banking group</span>
      </div>
    </nav>
  );
};

export default Navbar;
