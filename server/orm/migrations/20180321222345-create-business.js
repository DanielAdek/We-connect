export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Businesses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    businessName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.NUMERIC
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Businesses')
};
