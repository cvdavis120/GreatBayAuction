CREATE DATABASE auction_db;

USE auction_db;

CREATE TABLE items (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    item_name TEXT,
    category TEXT,
    opening_bid FLOAT,
    PRIMARY KEY (id)
);
