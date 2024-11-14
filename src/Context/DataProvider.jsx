import { createContext, useContext, useState } from "react";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <DataContext.Provider value={{ active, setActive }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;

export function useData() {
  return useContext(DataContext);

}
