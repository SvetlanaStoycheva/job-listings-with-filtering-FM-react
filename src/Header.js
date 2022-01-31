import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';

const Header = () => {
  return (
    <section className='header'>
      <div className='header-bg-container'></div>
      <article className='btns-container'>
        <div className='filter-btns'>
          <div className='single-filter-btn'>
            <button className='filter-btn'>Frontend</button>
            <span className='filter-btn-icon'>
              <IoClose />
            </span>
          </div>
        </div>
        <button className='clear-btn'>Clear</button>
      </article>
    </section>
  );
};

export default Header;
