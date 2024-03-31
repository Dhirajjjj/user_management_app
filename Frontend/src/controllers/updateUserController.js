import { deleteUser, updateUser } from '../services/userService';
import UpdateUser from '../components/user/updateUser/updateUser';

const UpdateUserController = ({ closeEditUser, currentUser, updateUserList, deleteUserFromList }) => {

  const handleUpdate = async (userData) => {
    try {
        await updateUser(currentUser.id, userData);
        updateUserList(currentUser.id, userData);
    } catch (error) {
        console.log(`Error creating user: ${error.message}`);
    }
  };

  const handleDelete = async () => {
    try {
        await deleteUser(currentUser.id);
        deleteUserFromList(currentUser.id);
    } catch (error) {
        console.log(`Error creating user: ${error.message}`);
    }
  };

  return (
    <>
      <UpdateUser onSubmit={handleUpdate} onDelete={handleDelete} closeEditUser={closeEditUser} currentUser={currentUser} />
    </>
  );
};

export default UpdateUserController;
