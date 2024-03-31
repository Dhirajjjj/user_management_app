const User = require('../models/user');

exports.createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

exports.getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

exports.updateUser = async (id, updatedData) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.update(updatedData);
    return user;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

exports.deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return user;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
