CREATE DATABASE auction_db;

-- Makes it so all of the following code will affect animals_db --
USE auction_db;

CREATE TABLE items (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    item_name TEXT,
    category TEXT,
    opening_bid TEXT,
    PRIMARY KEY (id)
);
