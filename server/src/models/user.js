export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username already in use by another user'
      },
      validate: {
        is: {
          args: ['^[a-z]+$', 'i'],
          msg: 'username can only contain letters'
        },
        len: {
          args: [4, 30],
          msg: 'username can only be four to thirty letters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email is already in use by another user'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email can only be an email format like this youremail@email.com'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Business, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Review, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};
