import { PiFlaskFill } from "react-icons/pi";
import { IoApps } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
function HomeHeader() {
  return (
    <div className="w-full px-3 md:px-8 py-4 flex align-middle justify-between bg-white">
      <div className="left-container">
        <ul className="flex list-none gap-2">
          <li className="md:text-[1em]">
            <a href="" className="no-underline hover:underline">
              About
            </a>
          </li>
          <li className="md:text-[1em]">
            <a href="" className="no-underline hover:underline">
              Store
            </a>
          </li>
        </ul>
      </div>
      <div className="right-container">
        <ul className=" flex list-none justify-center align-middle gap-2 md:gap-4">
          <li className="md:mr-3 md:mt-1">
            <a href="" className="no-underline hover:underline">
              Gmail
            </a>
          </li>
          <li className="md:mr-3 md:mt-1">
            <a href="" className="no-underline hover:underline">
              Images
            </a>
          </li>
          <li className=" hover:bg-slate-300  rounded-3xl px-1 py-1 display-">
            <PiFlaskFill size={33} color="#5f6368" />
          </li>
          <li className=" hover:bg-slate-300  rounded-3xl px-1 py-1">
            <IoApps size={30} color="#5f6368" />
          </li>
          <li className=" hover:bg-slate-300  cursor-pointer rounded-3xl px-1 py-1">
            <FaUserCircle size={33} color="#FF7722" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HomeHeader;
