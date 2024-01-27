const express = require('express');
const globalRouter = express.Router();
const pool = require('../modules/pool.js');

// DELETE individual grocery item
globalRouter.delete('/', (req, res) => {
  const queryText = `DELETE FROM "shopping_list" *;`;
  pool
    .query(queryText)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR:', err);
      res.sendStatus(500);
    });
});

// PUT Reset ALL Buy Status
globalRouter.put('/', (req, res) => {
  // const id = parseInt(req.params.id);
  // const grocery = req.body;
  const queryText = `UPDATE "shopping_list" SET "Buy" = FALSE;`;
  pool
    .query(queryText)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR:', err);
      res.sendStatus(500);
    });
});

module.exports = globalRouter;
