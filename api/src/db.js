import Sequelize from 'sequelize';

let db = null;

module.exports = app => {
  const configs = app.libs.configs;
  !db ?
    new Sequelize(
      configs.database,
      configs.username,
      configs.password,
      configs.params,
      configs.operatorsAliases,
    ) :
    db
};
