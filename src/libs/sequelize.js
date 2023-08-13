const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
//const setupInitial = require("../db/models");

const USER = encodeURIComponent(config.DB_USER);
const PASSWORD = encodeURIComponent(config.DB_PASSWORD);

const URI = `postgres://${USER}:${PASSWORD}@${config.DB_HOST}/${config.DB_NAME}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: (...msg) => console.log(msg),
    define: {
        freezeTableName: true, // Evita que Sequelize pluralice los nombres de tabla
    },
});

//setupInitial(sequelize);

module.exports = sequelize;