// backend/functions/api/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const serverless = 'serverless-http';
const cors = require('cors');
const path = require('path');

// When deployed, the 'included_files' are placed in the root of the function's
// containing folder. This script is in 'api/', so we look one level up.
const dataPath = path.resolve(__dirname, '..', 'data.js');
const dbPath = path.resolve(__dirname, '..', 'database.sqlite');

const { queries } = require(dataPath);
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Fatal: Error connecting to the database:", err.message);
    } else {
        console.log("Successfully connected to the SQLite database.");
    }
});

const router = express.Router();

router.get('/queries', (req, res) => {
    res.json(queries);
});

router.post('/query', (req, res) => {
    const { sql } = req.body;
    if (!sql) {
        return res.status(400).json({ error: 'SQL query is missing.' });
    }
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error("Query execution error:", err.message);
            res.status(500).json({ error: `Query execution failed: ${err.message}` });
        } else {
            res.status(200).json(rows);
        }
    });
});

// The path your frontend calls: /.netlify/functions/api
app.use('/.netlify/functions/api', router);

// Export the handler for Netlify
module.exports.handler = require(serverless)(app);
