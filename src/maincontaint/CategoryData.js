import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoIosListBox } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { Link } from "react-router-dom"

function CategoryData() {
    return (
        <div className="flex h-screen w-screen ">
            <div className="w-full rounded-lg shadow-lg  ">
                <div className="flex items-center justify-between p-4 bg-white">
                    <div className="flex items-center">
                        <div className='flex flex-col'>
                            <span className="text-gray-800 font-bold text-lg ">Category</span>
                        </div>
                    </div>
                    <div className="px-4 py-2 w-96">
                        <div className="flex items-center border rounded-lg px-4 py-2">
                            <FaSearch className="text-gray-600 mr-2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <Link to="/addCategories" className="px-4 py-2 bg-purple-800 hover:bg-blue-600 text-white rounded">
                        Add New
                    </Link>
                </div>

                <div className="px-4 py-3 bg-orange-300">
                    <div className="grid grid-cols-6 gap-2">
                        <div className="text-gray-800 font-bold">ID</div>
                        <div className="text-gray-800 font-bold">Name</div>
                        <div className="text-gray-800 font-bold">Description</div>
                        <div className="text-gray-800 font-bold">Status</div>
                        <div className="text-gray-800 font-bold"></div>
                        <div className="text-gray-800 font-bold"></div>
                    </div>
                </div>

                <div className="px-4 py-2 mt-3 bg-gray-300">
                    <div className="grid grid-cols-6 gap-2">
                        <div className="text-gray-800 font-bold">1234</div>
                        <div className="text-gray-800 font-bold">Milk</div>
                        <div className="text-gray-800 font-bold">This is fresh milk</div>
                        <div className="text-gray-800 font-bold">Active</div>
                        <div className="text-gray-800 font-bold"><RiEdit2Line /></div>
                        <div className="text-gray-800 font-bold"><FaTrash /></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CategoryData
