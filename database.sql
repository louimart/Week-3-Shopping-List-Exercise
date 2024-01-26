-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE "shopping_list" (
	"id" SERIAL PRIMARY KEY,
	"Name" VARCHAR (80) NOT NULL,
	"Quantity" NUMERIC,
	"Unit" 	VARCHAR (20) NOT NULL
);

INSERT INTO "shopping_list" 
	("Name", "Quantity", "Unit") 
VALUES 
	('Bread', '1.52', 'loaf'),
	('Milk', '1', 'gal'),
	('Eggs', '1', 'carton');
	

SELECT * FROM "shopping_list";

DROP TABLE "shopping_list"