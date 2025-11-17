import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full h-auto bg-blue-600 flex justify-between border-2 border-amber-700">
        <div className="w-1/5 border-2 border-amber-400 text-[#ffffff] text-[20px] ml-10">
          <Link to={"/"}>Talha's Collections</Link>
        </div>
        <nav className="w-1/2 border-2 border-amber-400 flex">
          <ul className="h-auto w-full flex justify-evenly">
            <li className="text-[20px] text-[#ffffff]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-[20px] text-[#ffffff]">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="text-[20px] text-[#ffffff]">
              <Link to={"/collection"}>Collection</Link>
            </li>
            <li className="text-[20px] text-[#ffffff]">
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li className="text-[20px] text-[#ffffff]">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="w-1/5 border-2 border-amber-400 flex justify-end items-center mr-10">
          <Link to={"/cart"}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[#ffffff] text-[16px] p-1.5"
            />
          </Link>
          <Link to={"/login"}>
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#ffffff] text-[16px] p-1.5"
            />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
