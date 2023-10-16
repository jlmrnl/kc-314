module.exports = (sequelize, Sequelize) => {
  //Appointments Schema
  const Appointment = sequelize.define('appointment', {
    //attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    FullName: {
      type: Sequelize.STRING,
    },
    PhoneNo: {
      type: Sequelize.STRING,
    },
    Doctor: {
      type: Sequelize.STRING,
    },
    AppointmentTime: {
      type: Sequelize.TIME,
    },
    AppointmentDate: {
      type: Sequelize.DATEONLY,
    },
    Services: {
      type: Sequelize.STRING,
    },
  });

  return Appointment;
};
