import { createContext, useState } from "react";

export const dataContext = createContext();

function ContextProvider({ children }) {
  const [searchImage, setSearchImage] = useState(false);

  return (
    <dataContext.Provider
      value={{
        searchImage,
        setSearchImage,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
export default ContextProvider;
