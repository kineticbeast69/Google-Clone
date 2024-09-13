import InputTag from "./inputTag";
function HomeBody() {
  return (
    <main className="grow flex flex-col align-middle">
      <div className="w-[350px] mx-auto mt-20">
        <img src="../../public/images/google-logo.png" alt="" />
      </div>
      <InputTag />
      <div className="buttons flex align-middle justify-center mt-7">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 hover:border hover:border-gray-300 rounded shadow mr-2">
          Google Search
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 hover:border hover:border-gray-300 rounded shadow ml-2">
          I'm Feeling Lucky
        </button>
      </div>
      <div className="m-auto mt-7">
        <ul className="flex list-none text-[13px]">
          <li>Google Offers in:</li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              हिन्दी{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              বাংলা{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              తెలుగు{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              मराठी{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              தமிழ்{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              ગુજરાતી{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              ಕನ್ನಡ{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              മലയാളം{" "}
            </a>
          </li>
          <li className="mx-2">
            <a href="" className="hover:underline text-blue-700">
              {" "}
              ਪੰਜਾਬੀ{" "}
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default HomeBody;
