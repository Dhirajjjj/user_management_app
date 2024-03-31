import React, { useState } from 'react';

function CreateUser({ closeAddUser, onSubmit }) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        const isEmptyField = Object.values(formData).some(value => value.trim() === '');

        if (isEmptyField) {
            alert('Please fill in all fields.');
          } else {
            e.preventDefault();
            closeAddUser();
            onSubmit(formData);
          }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="relative bg-white p-8 rounded-lg">

                    <div className="text-start">
                        <div class="flex flex-row items-center justify-between">
                            <text class="text-xl font-medium text-gray-700">Add User</text>
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={closeAddUser}
                            >
                            <svg
                                className="h-6 w-6"
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
                        <div class="mt-6 grid gap-4 lg:gap-6">

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                            <label htmlFor="firstName" class="block mb-2 text-sm text-gray-500 font-medium">First Name</label>
                            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} class=" py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="lastName" class="block mb-2 text-sm text-gray-500 font-medium">Last Name</label>
                            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} class="py-3 px-4 block w-full text-sm focus:border-blue-500 focus:ring-blue-500 border border-gray-300 rounded-md" />
                        </div>
                        </div>

                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm text-gray-500 font-medium ">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} class="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="password" class="block mb-2 text-sm text-gray-500 font-medium">Password</label>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} class="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="dateOfBirth" class="block mb-2 text-sm text-gray-500 font-medium">Date of Birth</label>
                            <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} class="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                    </div>

                    <div class="mt-12 grid">
                        <button
                            type="submit"  
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-500 text-white hover:bg-indigo-700">
                            Add
                        </button>
                    </div>
                        </form>

                    </div>
                </div>
          </div>
        </div>
    );
}

export default CreateUser;