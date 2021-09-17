import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div className="left_content">
        <h1 className="h1">This App is built in React Using : </h1>
        <div className="boxes">
          <div className="tools">
            <div>
              <span>Bootstrap</span>
            </div>
            <div>
              <span>React</span>
            </div>
            <div>
              <span>React-Router-DOM</span>
            </div>
            <div>
              <span>React-Icons</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
