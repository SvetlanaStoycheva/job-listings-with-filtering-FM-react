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

  //filter the data when filters are changed; show anly the jobs that containes all filters
  const filterData = () => {
    const filteredJobs = [];
    currentDisplayedJobs.map((job) => {
      const { role, position, level, tools, languages } = job;
      const itemBtns = [role, position, level, ...tools, ...languages];

      //check if job buttons contains all the filters
      const checker = (btns, currentFilters) =>
        currentFilters.every((f) => btns.includes(f));
      const res = checker(itemBtns, filters);
      if (res) {
        filteredJobs.push(job);
      }
    });
    console.log(filters);
    console.log(filteredJobs);
    setCurrentDisplayedJobs(filteredJobs);
  };
  useEffect(() => {
    if (filters.length > 0) {
      filterData();
    }
  }, [filters]);

  //when clear btn in header is clicked; clear filters, show the full joblist
  const clearAllFilters = () => {
    setFilters([]);
    setCurrentDisplayedJobs(data);
  };

  //remove filter when close btn is clicked in the header; show the corresponding job list after the remove.
  const removeFilter = (f) => {
    const newFilters = filters.filter((filter) => filter !== f);
    setFilters(newFilters);
    //we need to first have the whole job list in order to filter it with reduced number of filters after deleting one or more of them
    setCurrentDisplayedJobs(data);
  };

  return (
    <AppContext.Provider
      value={{
        handleChoosenFilter,
        filters,
        currentDisplayedJobs,
        clearAllFilters,
        removeFilter,
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
