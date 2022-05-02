const { Pool, Client } = require("pg");
require("dotenv").config();

const devConfig = `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

const productionConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? productionConfig : devConfig,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
