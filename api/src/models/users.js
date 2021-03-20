module.exports = (sequelize, DataType) => {
  sequelize.define('users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastname: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    processed: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: sequelize.DATE,
      defaultValue: sequelize.NOW
    },
  });
};
