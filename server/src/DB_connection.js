require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const UserModel = require("./models/User");
const CharacterModel = require("./models/Character");
const FavoriteModel = require("./models/Favorite");

// ? Here are your environment variables
// * PostgreSQL configuration
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

UserModel(sequelize);
CharacterModel(sequelize);
FavoriteModel(sequelize);

// * Relaciones
const { User, Character, Favorite } = sequelize.models;

User.hasMany(Favorite);
Favorite.belongsTo(User);

User.hasMany(Character);
Character.belongsTo(User);

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
