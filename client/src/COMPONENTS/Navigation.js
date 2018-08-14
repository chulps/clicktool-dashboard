import React, { Component } from 'react';
import '../CSS/Global.css';
import '../CSS/Navbar.css';
import logo from '../clicktool-logo.svg'


class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg bg-white text-lt-blue'>
        
        {/* Clicktool logo that links to the main Clicktool wite when clicked */}
        <a className='navbar-brand' href='https://clicktool.com/'>
          <img src={logo} height={60} alt='logo' />
        </a>

        {/* Responsive Nav button only visible on small screen */}
        <button
          className='navbar-toggler navbar-light'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          {/* Nav button icon */}
          <span className='navbar-toggler-icon' />
        </button>

        {/* Responsive Nav links */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          
          {/* Nav links <ul> wrapper */}
          <ul className='navbar-nav text-center'>
            
            {/* Link to Home */}
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>

            {/* Link to Dashboard page */}
            <li className='nav-item'>
              <a className='nav-link' href='/dashboard'>
                Dashboard
              </a>
            </li>

            {/* Link to Transactions page */}
            <li className='nav-item'>
              <a className='nav-link' href='/transactions'>
                Transactions
              </a>
            </li>

            {/* Link to Change Password Page */}
            <li className='nav-item'>
              <a className='nav-link' href='/changepassword'>
                Change Password
              </a>
            </li>

            {/* This doesn't do anything... */}
            <li className='nav-item'>
              <a className='nav-link' href='/logout'>
                <strong>Logout</strong>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
