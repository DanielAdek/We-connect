export default (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    businessname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ['^[a-z]+$', 'i'],
          msg: 'Business name can only be leters'
        }
      }
    },
    phone: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      validate: {
        is: {
          args: ['^[0-9]+$', 'i'],
          msg: 'phone must be a number'
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ['^[a-z]+$', 'i'],
          msg: 'Business location can only be leters'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ['^[a-z]+$', 'i'],
          msg: 'Business category can only be leters'
        }
      }
    },
    businessimage: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Business.associate = (models) => {
    // associations can be defined here
    Business.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Business.hasMany(models.Review, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE'
    });
  };
  return Business;
};
