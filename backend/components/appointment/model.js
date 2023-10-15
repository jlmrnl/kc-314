module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define('appointment', {
    AppointmentTicketNo: {
      type: Sequelize.STRING,
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
      type: Sequelize.STRING,
    },
    AppointmentDate: {
      type: Sequelize.STRING,
    },
    Services: {
      type: Sequelize.STRING,
    },
  });

  return Appointment;
};
