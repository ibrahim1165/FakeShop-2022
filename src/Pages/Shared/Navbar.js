import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-900 px-8 lg:text-white">
        <div className="navbar-start">
          <div className="dropdown">
      
            <label tabIndex="0" className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            {/* Mobile responsive */}

            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/Dashboard">dashboard</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              {/* <li>{user?<button onClick={singout}>Logout</button>:
              <Link to="/login">Login</Link> 
                }</li> */}
             
            </ul>
          </div>
          <div className="w-24 rounded-lg">
          {/* <img src="{cover}" alt="" /> */}
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white"> E-COMMERCE</Link>
        </div>

        {/* Web responsive */}
        
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/Dashboard">Dashboard</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              {/* <li>{user?<button onClick={singout}>Logout</button>:
              <Link to="/login">Login</Link> 
                }</li> */}
          </ul> 
        </div>
      </div>
    );
};

export default Navbar;