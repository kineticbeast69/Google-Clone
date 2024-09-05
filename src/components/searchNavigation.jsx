import { useState, useEffect, useContext } from "react";
import { dataContext } from "../context/contextProvider";
function SearchNavigation() {
  const { searchImage, setSearchImage } = useContext(dataContext);
  const [selectMenu, setSelectMenu] = useState("All");
  const menus = ["All", "Images", "Videos", "Shopping", "News", "Map"];
  const setMenu = (menu) => {
    setSelectMenu(menu);
    if (menu === "Images") {
      setSearchImage(true);
    } else if (menu === "All") {
      setSearchImage(false);
    } else {
      setSearchImage(false);
    }
  };
  console.log(searchImage);
  return (
    <>
      <div className="flex justify-start align-middle ml-44">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="mx-8 cursor-pointer"
            onClick={() => setMenu(menu)}
          >
            <span
              className={
                selectMenu == menu ? "text-blue-800  font-semibold " : ""
              }
            >
              {menu}
            </span>
            {selectMenu == menu ? (
              <div className="mt-1 h-1 bg-blue-800"></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default SearchNavigation;
