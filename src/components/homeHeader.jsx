import { PiFlaskFill } from "react-icons/pi";
import { IoApps } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
function HomeHeader() {
  return (
    <div className="w-full px-8 py-4 flex align-middle justify-between bg-white">
      <div className="left-container">
        <ul className="flex list-none">
          <li className="pr-2 text-[1em]">
            <a href="" className="no-underline hover:underline">
              About
            </a>
          </li>
          <li className="pl-2 text-[1em]">
            <a href="" className="no-underline hover:underline">
              Store
            </a>
          </li>
        </ul>
      </div>
      <div className="right-container">
        <ul className=" flex list-none justify-center align-middle">
          <li className="mr-3 mt-1">
            <a href="" className="no-underline hover:underline">
              Gmail
            </a>
          </li>
          <li className="mr-3 mt-1">
            <a href="" className="no-underline hover:underline">
              Images
            </a>
          </li>
          <li className="mx-2 hover:bg-slate-300  rounded-3xl px-1 py-1">
            <PiFlaskFill size={33} color="#5f6368" />
          </li>
          <li className="mx-2 hover:bg-slate-300  rounded-3xl px-1 py-1">
            <IoApps size={30} color="#5f6368" />
          </li>
          <li className="mx-2 hover:bg-slate-300  cursor-pointer rounded-3xl px-1 py-1">
            <FaUserCircle size={33} color="#FF7722" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HomeHeader;
