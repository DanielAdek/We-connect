import fs        from 'fs';
import path      from 'path';
import Sequelize from 'sequelize';
import configPath from './../config/config.json';

const env       = process.env.NODE_ENV || 'development';
const config = configPath[env];
const basename  = path.basename(module.filename);
const db        = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database, config.username, config.password, config
  );
}

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log(`Unable to connect to the database:, ${err.message}`);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;