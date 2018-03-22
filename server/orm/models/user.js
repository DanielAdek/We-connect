const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};

export default userModel;
