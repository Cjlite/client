import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosListBox } from 'react-icons/io';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <aside className="flex flex-col justify-between bg-gray-200 w-72 h-screen">

            <nav className="flex-1">
                <div className='flex flex-row hover:bg-orange-400 space-x-4'>
                    <FaHome className='mt-3' />
                    <div className="block py-2 px-4 text-gray-900  " >
                        <Link to="/">Home</Link>
                    </div>
                </div>

                <div className='flex flex-row hover:bg-orange-400 space-x-4'>
                    <IoIosListBox className='mt-3' />
                    <div className="block py-2 px-4 text-gray-900  " >
                        <Link to="/category">Category</Link>
                    </div>
                </div>

                <div className='flex flex-row hover:bg-orange-400 space-x-4'>
                    <BsGrid3X3GapFill className='mt-3' />
                    <div className="block py-2 px-4 text-gray-900  " >
                        <Link to="/products">Products</Link>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
