import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logging out...');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="flex justify-between items-center bg-purple-800 py-4 px-6">
            <div className="flex items-center">
                {/* <img
                    className="h-8 w-8 mr-2"
                    src="/logo.png"
                    alt="DigitalFlack Logo"
                /> */}
                <span className="text-white font-bold">DigitalFlack</span>
            </div>
            <div className="relative">
                <div className="cursor-pointer" onClick={toggleDropdown}>
                    <AiOutlineUser className='h-7 w-7' />
                </div>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={handleLogout}
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
