import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';

const ListUserController = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getUsers();
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const userListWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { userList: users, setUserList: setUsers })
  );

  return (
    <>
      { userListWithProps }
    </>
  );
};

export default ListUserController;
