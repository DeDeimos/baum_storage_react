// db.js
const pgp = require('pg-promise')();
const dbconfig = require('./dbconfig');

// Создание соединения
const db = pgp(dbconfig);

// Экспорт объекта db для использования в других модулях
module.exports = db;