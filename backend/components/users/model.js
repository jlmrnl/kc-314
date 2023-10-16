
module.exports = (sequelize, Sequelize) => {
  //User Schema
  const Users = sequelize.define('users', {
    //attributes
    UserFName: {
      //data types
      type: Sequelize.STRING,
    },
    UserLName: {
      type: Sequelize.STRING,
    },
    Birthday: {
      type: Sequelize.DATE,
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
