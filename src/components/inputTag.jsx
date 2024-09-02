import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
function InputTag() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  function keyPress(event) {
    if (event.key === "Enter") {
      if (inputValue === "") return;
      const value = inputValue.trim().split(" ").join("+");
      const urlQuery = `/search/${value}/${1}`;
      navigate(urlQuery);
    }
  }
  return (
    <div className="mx-auto my-6 flex align-middle justify-center gap-2 border border-slate-300 hover:shadow-md hover:shadow-slate-300 hover:cursor-pointer rounded-3xl px-1">
      <label htmlFor="search" className="mt-3">
        <MdOutlineSearch size={32} color="#5f6368" />
      </label>
      <input
        type="search"
        placeholder="search..."
        id="search"
        autoComplete="off"
        className="w-[500px] border active:border-b-slate-300 text-xl px-3"
        onKeyDown={keyPress}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <button>
          <img src="../../images/mic_icon.png" alt="" />
        </button>
      </div>
      <div>
        <button>
          <img src="../../images/lens_icon.png" alt="" />
        </button>
      </div>
    </div>
  );
}
export default InputTag;
