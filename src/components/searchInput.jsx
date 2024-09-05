import { RxCross1 } from "react-icons/rx";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
function SearchInput() {
  const navigate = useNavigate();
  const { query } = useParams();
  const paramValue = query.split("+").join(" ");
  const [inputData, setInputData] = useState(paramValue);
  const [width, setWidth] = useState(false);
  const nullSate = () => {
    setInputData("");
    setWidth(false);
  };
  const keypress = (event) => {
    if (event.key === "Enter") {
      if (inputData === "") return;
      setInputData(inputData.trim());
      const urlValue = inputData.split(" ").join("+");
      navigate(`/search/${urlValue}/${1}`);
    }
  };
  return (
    <div className=" flex align-middle justify-center gap-2 border border-slate-300 hover:shadow-md hover:shadow-slate-300 hover:cursor-pointer rounded-3xl px-1">
      <input
        type="text"
        placeholder="search..."
        id="search"
        onClick={() => setWidth(true)}
        autoComplete="off"
        value={inputData}
        onKeyDown={keypress}
        onChange={(e) => setInputData(e.target.value)}
        className={
          width
            ? "w-[850px] border active:border-b-slate-300 text-xl px-3"
            : "w-[500px] border active:border-b-slate-300 text-xl px-3"
        }
      />
      {inputData == "" ? (
        ""
      ) : (
        <RxCross1 size={34} className="my-auto" onClick={nullSate} />
      )}

      <div>
        <Link to="/voiceSearch">
          <button>
            <img src="../../images/mic_icon.png" alt="" />
          </button>
        </Link>
      </div>
      <div>
        <button>
          <img src="../../images/lens_icon.png" alt="" />
        </button>
      </div>
    </div>
  );
}
export default SearchInput;
