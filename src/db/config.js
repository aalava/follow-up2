const { config } = require("../config/config");

const USER = encodeURIComponent(config.DB_USER);
const PASSWORD = encodeURIComponent(config.DB_PASSWORD);

const URI = `postgres://${USER}:${PASSWORD}@${config.DB_HOST}/${config.DB_NAME}`;


module.exports = { 
    development: {
        url: URI,
        dialect: 'postgres'
    },
    production: {
        url: URI,
        dialect: 'postgres'
    }
}