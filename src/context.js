import React, { useState, useContext, useEffect } from 'react';
import { data } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [currentDisplayedJobs, setCurrentDisplayedJobs] = useState(data);

  //when a button is clicked in the job contaner
  const handleChoosenFilter = (e) => {
    const btnText = e.target.textContent;
    setFilters([...filters, btnText]);
  };

  //filter the data when filters are changed
  const filterData = () => {
    const filteredJobs = [];

    filters.map((filter) => {
      currentDisplayedJobs.map((job) => {
        const { role, position, level, tools, languages } = job;
        const itemBtns = [role, position, level, ...tools, ...languages];
        itemBtns.map((itemBtn) => {
          if (itemBtn === filter) {
            filteredJobs.push(job);
          }
        });
      });
    });
    console.log(filteredJobs);

    setCurrentDisplayedJobs(filteredJobs);
  };
  useEffect(() => {
    if (filters.length > 0) {
      filterData();
    }
  }, [filters]);

  //when clear btn in header is clicked; clear filters, show the full joblist
  const clearFilters = () => {
    setFilters([]);
    setCurrentDisplayedJobs(data);
  };
  return (
    <AppContext.Provider
      value={{
        handleChoosenFilter,
        filters,
        currentDisplayedJobs,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
// const { openSidebar, openModal } = useGlobalContext();
