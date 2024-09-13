import { PiFlaskFill } from "react-icons/pi";
import { IoApps } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { dataContext } from "../context/contextProvider";
import SearchInput from "./searchInput";
import SearchNavigation from "./searchNavigation";
function SearchHeader() {
  const [hasShadow, setHasShadow] = useState(false);
  useEffect(() => {
    const shadow = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", shadow);
    return () => {
      window.removeEventListener("scroll", shadow);
    };
  }, []);
  return (
    <>
      <div
        className={`flex align-middle justify-between px-8 z-50 bg-white py-6 sticky top-0 left-0 transition-shadow duration-300 ${
          hasShadow ? "shadow-2xl py-3" : ""
        }`}
      >
        <div className="left-side flex justify-center align-middle gap-3">
          <div className="w-[150px]">
            <Link to="/">
              <img src="../../public/images/google-logo.png" alt="" />
            </Link>
          </div>
          <SearchInput />
        </div>
        <div className="right-side">
          <ul className="flex justify-center align-middle">
            <li className="mx-2 hover:bg-slate-300  rounded-3xl px-1 py-1">
              <PiFlaskFill size={27} color="#5f6368" />
            </li>
            <li className="mx-2 hover:bg-slate-300  rounded-3xl px-1 py-1">
              <IoApps size={25} color="#5f6368" />
            </li>
            <li className="mx-2 hover:bg-slate-300  cursor-pointer rounded-3xl px-1 py-1">
              <FaUserCircle size={30} color="#FF7722" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-3 border border-b-slate-300">
        <SearchNavigation />
      </div>
    </>
  );
}
export default SearchHeader;
