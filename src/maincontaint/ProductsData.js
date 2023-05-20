import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { Link } from "react-router-dom"


function ProductsData() {

    return (
        <div className="flex h-screen w-screen ">
            <div className="w-full rounded-lg shadow-lg  ">
                <div className="flex items-center justify-between p-4 bg-white">
                    <div className="flex items-center">
                        <div className='flex flex-col'>
                            <span className="text-gray-800 font-bold text-lg ">Products</span>
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

                    <Link to="/addProduct" className="px-4 py-2 bg-purple-800 hover:bg-blue-600 text-white rounded">
                        Add New
                    </Link>

                </div>

                <div className="px-4 py-3 bg-orange-300">
                    <div className="grid grid-cols-7 gap-2">
                        <div className="text-gray-800 font-bold">ID</div>
                        <div className="text-gray-800 font-bold">Name</div>
                        <div className="text-gray-800 font-bold">Pack Size</div>
                        <div className="text-gray-800 font-bold">Category</div>
                        <div className="text-gray-800 font-bold">MRP</div>
                        <div className="text-gray-800 font-bold">Image</div>
                        <div className="text-gray-800 font-bold">Status</div>
                    </div>
                </div>

                <div className="px-4 py-2 mt-3 bg-gray-300">
                    <div className="grid grid-cols-8 gap-2">
                        <div className="text-gray-800 font-bold">1234</div>
                        <div className="text-gray-800 font-bold">Amul Milk</div>
                        <div className="text-gray-800 font-bold">500</div>
                        <div className="text-gray-800 font-bold">Milk</div>
                        <div className="text-gray-800 font-bold">Rs 70</div>
                        <div className="text-gray-800 font-bold">Image</div>
                        <div className="text-gray-800 font-bold"><RiEdit2Line /></div>
                        <div className="text-gray-800 font-bold"><FaTrash /></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductsData
