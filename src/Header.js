import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Header = () => {
  const { filters, clearAllFilters, removeFilter } = useGlobalContext();
  return (
    <section className='header'>
      <div className='header-bg-container'></div>
      <article className='btns-container'>
        <div className='filter-btns'>
          {filters.length > 0 &&
            filters.map((f, index) => {
              return (
                <div className='single-filter-btn' key={index}>
                  <button className='filter-btn'>{f}</button>
                  <span
                    className='filter-btn-icon'
                    onClick={() => removeFilter(f)}
                  >
                    <IoClose />
                  </span>
                </div>
              );
            })}
        </div>
        <button className='clear-btn' onClick={clearAllFilters}>
          Clear
        </button>
      </article>
    </section>
  );
};

export default Header;
