
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    UserFName: {
      type: Sequelize.STRING,
    },
    UserLName: {
      type: Sequelize.STRING,
    },
    Birthday: {
      type: Sequelize.STRING,
    },
    Age: {
      type: Sequelize.INTEGER,
    },
    UserEmail: {
      type: Sequelize.STRING,
    },
    UserPassword: {
      type: Sequelize.STRING,
    },
  });

  return Users;
};
