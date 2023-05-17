DROP DATABASE IF EXISTS gifts_dev;
CREATE DATABASE gifts_dev; 

\c gifts_dev; 
CREATE TABLE gifts (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    price DECIMAL(3, 2) CHECK (price>1000 AND price <= 100000),
    quantity INTEGER CHECK (quantity>0 AND quantity <= 100),
    description TEXT NOT NULL, 
    in_stock BOOLEAN NOT NULL DEFAULT FALSE
);