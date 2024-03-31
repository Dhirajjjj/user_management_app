import React, { useState } from 'react';

import UserColumnHeader from "./common/userColumnHeader";
import UserListFooter from "./common/userListFooter";
import UserListHeader from "./common/userListHeader";
import UserListCard from './common/userListCard';
import CreateUserController from '../../controllers/createUserController';
import UpdateUserController from '../../controllers/updateUserController';

function UserList({ userList, setUserList }) {

    const [isAddOpen, setAddOpen] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    const openAddUser = () => {
        setAddOpen(true);
    };

    const closeAddUser = () => {
        setAddOpen(false);
    };

    const openEditUser = () => {
        setEditOpen(true);
    };

    const closeEditUser = () => {
        setEditOpen(false);
    };

    const setUser = (user) => {
        setCurrentUser(user);
    };

    const addUserList = (user) => {
        setUserList(userList => [...userList, user]);
    };

    const updateUserList = (userId, userData) => {
        const index = userList.findIndex(user => user.id === userId);

        if (index !== -1) {
            const updatedList = { ...userList[index], ...userData };

            const newUserList = [...userList];
            newUserList[index] = updatedList;

            setUserList(newUserList);
        }
    };

    const deleteUserFromList = (userId) => {
        const updatedList = userList.filter(user => user.id !== userId);
        setUserList(updatedList);
    };

    const filteredUserList = userList.filter(user =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    return (
        <>
            <div class="flex flex-col items-center p-12">
                <UserListHeader openAddUser={openAddUser} searchQuery={searchQuery} searchChange={handleSearchChange} />
                <UserColumnHeader />
                {filteredUserList.length > 0 ? 
                    filteredUserList.map(user => (
                        <UserListCard key={user.id} user={user} openEditUser={openEditUser} setUser={setUser} />
                    )) : (
                        <div class="w-2/3 bg-gray-50 px-4 py-12 text-center border-x border-b border-gray-200">
                            <text class="text-md text-gray-400" >No users have been added yet</text>
                        </div>
                    )
                }
                <UserListFooter userListSize={userList.length ? userList.length : "0"} />
            </div>
            {isAddOpen && <CreateUserController closeAddUser={closeAddUser} userList={userList} addUserList={addUserList} />}
            {isEditOpen && <UpdateUserController closeEditUser={closeEditUser} currentUser={currentUser} updateUserList={updateUserList} deleteUserFromList={deleteUserFromList} />}
        </>
    );
}

export default UserList;
