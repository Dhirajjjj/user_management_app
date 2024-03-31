const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  }
});

User.updateUser = async function(id, updatedData) {
  try {
    const user = await this.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.update(updatedData);
    return user;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

User.deleteUser = async function(id) {
  try {
    const user = await this.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return user;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

module.exports = User;
