import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
        navigate("/login");
    };

    const navItems = (
        <>
            <li><a href='/'>Home</a></li>
            <li><a href='/Courses'>Courses</a></li>
            <li><a href='/Contact'>Contact</a></li>
            <li><a href='/About'>About</a></li>
        </>
    );

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 fixed px-4 top-0 left-0 right-0 z-50">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold pointer">PyBuddy</a>
                </div>

                <div className="navbar-end space-x-3 flex-grow">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="grow outline-none" placeholder="Search" />
                            <kbd className="kbd kbd-sm">⌘</kbd>
                        </label>
                    </div>

                    
                    <div className="btn px-6 text-gray-100 bg-gray-900 justify-end cursor-pointer">
                        {token ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
