CREATE DATABASE auth;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL,
    realname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthdate SMALLINT,
    regTimestamp TIMESTAMP
);