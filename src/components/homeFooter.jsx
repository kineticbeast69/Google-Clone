function HomeFooter() {
  return (
    <div className="w-full  px-8 bg-white">
      <div className="top-footer py-2">
        <p className="text-left text-black font-semibold text-[1em]">India</p>
      </div>
      <div className="h-[1px] bg-gray-300"></div>
      <div className="bottom-footer flex justify-between align-middle py-4">
        <div className="left-side-footer">
          <ul className="flex">
            <li className="text-black font-semibold  text-[1em] mr-4">
              <a href="" className="no-underline hover:underline">
                Advertsing
              </a>
            </li>
            <li className="text-black font-semibold text-[1em] mr-4">
              <a href="" className="no-underline hover:underline">
                Business
              </a>
            </li>
            <li className="text-black font-semibold text-[1em] mr-4">
              <a href="" className="no-underline hover:underline">
                How Search Works
              </a>
            </li>
          </ul>
        </div>
        <div className="right-side-footer">
          <ul className="flex">
            <li className="text-black font-semibold text-[1em] mr-4">
              <a href="" className="no-underline hover:underline">
                Privacy
              </a>
            </li>
            <li className="text-black font-semibold text-[1em] mr-4">
              <a href="" className="no-underline hover:underline">
                Terms
              </a>
            </li>
            <li className="text-black font-semibold text-[1em] mr-4">
              <a href="" className="no-underline hover:underline">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HomeFooter;
