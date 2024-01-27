const express = require('express');
const shoppingRouter = express.Router();
const pool = require('../modules/pool.js');


// Setup a GET route to get all the items from the database
shoppingRouter.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order
    const sqlText = `SELECT * FROM "shopping_list" ORDER BY "id" ASC;`;
    pool
      .query(sqlText)
      .then((result) => {
        console.log(`Got stuff back from the database`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      });
  });

// Setup a POST route to add a new grocery item to the database
  shoppingRouter.post('/', (req, res) => {
    const grocery = req.body;
    const sqlText = `INSERT INTO "shopping_list" ("Name", "Quantity", "Unit")
                      VALUES ($1, $2, $3)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool
      .query(sqlText, [grocery.Name, grocery.Quantity, grocery.Unit])
      .then((result) => {
        console.log(`Added item to the database`, grocery);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      });
  });

// PUT update purchase status (BUY)
shoppingRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const grocery = req.body;
    const queryText = `UPDATE "shopping_list" SET "Buy" = NOT "Buy" WHERE "id" = $1;`;
    pool
        .query(queryText, [id])
        .then(() => {
            res.sendStatus(200);
          })
          .catch((err) => {
            console.log('ERROR:', err);
            res.sendStatus(500);
        });
    });

// DELETE individual grocery item
shoppingRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const queryText = `DELETE FROM "shopping_list" WHERE "id" = $1;`;
    pool
        .query(queryText, [id])
        .then(() => {
            res.sendStatus(200);
          })
          .catch((err) => {
            console.log('ERROR:', err);
            res.sendStatus(500);
        });
    });


  module.exports = shoppingRouter;



