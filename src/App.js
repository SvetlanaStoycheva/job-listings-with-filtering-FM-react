import React from 'react';
import Header from './Header';
import { data } from './data';

function App() {
  return (
    <main className='main-container'>
      <Header />
      <div className='jobs-container'>
        {data.map((i) => {
          const {
            company,
            contract,
            featured,
            id,
            languages,
            level,
            location,
            logo,
            new: newFlag,
            position,
            role,
            tools,
            postedAt,
          } = i;
          const allLanguagesButtons = [
            role,
            position,
            level,
            ...tools,
            ...languages,
          ];
          return (
            <article
              className={`${
                featured
                  ? 'single-job-container single-job-container-border'
                  : 'single-job-container'
              }`}
              key={id}
            >
              <div className='logo-info'>
                <img src={logo} alt='company-logo' className='company-logo' />
                <div className='job-info'>
                  <div className='job-info-header'>
                    <p>{company}</p>
                    {newFlag && <button className='new-flag-btn'>NEW!</button>}
                    {featured && (
                      <button className='featured-btn'>FEATURED</button>
                    )}
                  </div>
                  <h3>{position}</h3>
                  <div className='job-info-footer'>
                    <p>{postedAt}</p>
                    <span>.</span>
                    <p>{contract}</p>
                    <span>.</span>
                    <p>{location}</p>
                  </div>
                </div>
              </div>
              <div className='line'></div>
              <div className='languages'>
                {allLanguagesButtons.map((l, index) => {
                  return (
                    <button key={index} className='filter-btn languages-btn'>
                      {l}
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default App;
