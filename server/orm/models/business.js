const businessModel = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Invalid email, Enter a valid email, like so: you@mail.com"
        }
      },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
  }, {});
  Business.associate = (models)=> {
    // associations can be defined here
  };
  return Business;
};

export default businessModel;
