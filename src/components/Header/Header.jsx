import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { FaBusAlt } from 'react-icons/fa'; // Use bus-related icon

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className='text-uppercase header-title'>
            Bus Routes Agency
          </h1>
          <p className="text-lead">
            Plan your bus journeys with ease. Check schedules, book tickets, and explore routes.
          </p>
          <a href='/' className='btn header-btn'>
            <FaBusAlt /> <span>Get Started</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
