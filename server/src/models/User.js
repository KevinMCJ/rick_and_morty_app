const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          len: {
            args: [0, 35],
            msg: "El email no puede superar los 35 caracteres",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 10],
            msg: "La contraseña debe tener entre 6 y 10 caracteres",
          },
          is: /\d+/,
        },
      },
    },
    { timestamps: false }
  );
};
