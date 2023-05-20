import React from 'react'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function AddCategories() {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleFormSave = (e) => {
        console.log(e.target.value)
        e.preventDefault();

        // Log form values on the console
        console.log('Category Name:', categoryName);
        console.log('Description:', description);
        console.log('Status:', status);

        // Send form data to the backend
        fetch('/addcategories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryName,
                description,
                status,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Handle response from the backend
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleFormCancel = () => {

    }

    return (
        <div className="flex h-screen w-screen ">
            <div className="w-full rounded-lg shadow-lg mt-3">
                <div className="flex items-center justify-between p-4 bg-white">
                    <div className="flex items-center">
                        <div className='flex flex-row space-x-4'>
                            <FaArrowLeft className='mt-2' />
                            <span className="text-gray-800 font-bold text-lg ">Add Category</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mt-5">
                    <div className="px-4 py-2 w-96">
                        <div className="flex items-center border rounded-lg px-4 py-2">
                            {/* <FaSearch className="text-gray-600 mr-2" /> */}
                            <input
                                type="text"
                                placeholder="Category Nmae"
                                className="w-full outline-none bg-transparent"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="px-4 py-2 w-96">
                        <div className="flex items-center border rounded-lg px-4 py-2">
                            {/* <FaSearch className="text-gray-600 mr-2" /> */}
                            <input
                                type="text"
                                placeholder="Description"
                                className="w-full outline-none bg-transparent"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="px-4 py-2 w-96">
                        <div className="flex items-center border rounded-lg px-4 py-2 space-x-40">
                            <label htmlFor="dropdown">Status</label>
                            <select
                                id="dropdown"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option value="option1">Active</option>
                                <option value="option2">Inoctive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-96 mr-40">
                    <button className="bg-white border-2 rounded-full w-28 h-10 mr-2" type="button" onClick={handleFormCancel}>
                        Cancel
                    </button>
                    <button className="bg-purple-800 border-2 rounded-full w-28 h-10" type="submit" onClick={handleFormSave}>
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddCategories
