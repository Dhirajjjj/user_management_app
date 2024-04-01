import React, { useState } from 'react';

function UpdateUser({ closeEditUser, onSubmit, currentUser, onDelete }) {

    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        dateOfBirth: currentUser.dateOfBirth,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        closeEditUser();
        onSubmit(formData);
    };

    const handleUserDelete = (e) => {
        e.preventDefault();
        closeEditUser();
        onDelete();
    };

    return (
        <div classNameName="fixed z-10 inset-0 overflow-y-auto">
          <div classNameName="flex items-center justify-center min-h-screen">
            <div classNameName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div classNameName="relative bg-white p-8 rounded-lg">

                    <div classNameName="text-start">
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-xl font-medium text-gray-700">Update User</span>
                            <button
                                classNameName="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={closeEditUser}
                            >
                            <svg
                                classNameName="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-6 grid gap-4 lg:gap-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm text-gray-500 font-medium">First Name</label>
                                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className=" py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm text-gray-500 font-medium">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="py-3 px-4 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 border border-gray-300 rounded-md" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-500 font-medium ">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="dateOfBirth" className="block mb-2 text-sm text-gray-500 font-medium">Date of Birth</label>
                                <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-2">
                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-500 text-white hover:bg-indigo-700">Update</button>
                            <button onClick={handleUserDelete} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border hover:border-red-500  hover:bg-white hover:text-red-500 text-white bg-red-500">Delete</button>
                        </div>
                    </form>

                    </div>
                </div>
          </div>
        </div>
    );
}

export default UpdateUser;