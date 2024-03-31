import { createUser } from '../services/userService';
import CreateUser from '../components/user/createUser/createUser';

const CreateUserController = ({ closeAddUser, addUserList }) => {

  const handleSubmit = async (userData) => {
    try {
        let newUserData = await createUser(userData);
        addUserList(newUserData);
    } catch (error) {
        console.log(`Error creating user: ${error.message}`);
    }
  };

  return (
    <>
      <CreateUser onSubmit={handleSubmit} closeAddUser={closeAddUser} />
    </>
  );
};

export default CreateUserController;
