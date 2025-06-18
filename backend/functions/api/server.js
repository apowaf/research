// backend/functions/api/server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const serverless = require('serverless-http');
const cors = require('cors');
const path = require('path');

// In Netlify, included_files are placed at the root of the function's directory.
// We resolve the path from the current file's directory (__dirname) to find them.
const dataPath = path.resolve(__dirname, '..', 'data.js');
const dbPath = path.resolve(__dirname, '..', 'database.sqlite');

const { queries } = require(dataPath);
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        // This will show up in your Netlify function logs if there's an error
        console.error("Error connecting to the database:", err.message);
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
            res.status(500).json({ error: `Query execution failed: ${err.message}` });
        } else {
            res.status(200).json(rows);
        }
    });
});

// This path is what your frontend calls
app.use('/.netlify/functions/api', router);

// Export the handler for Netlify
module.exports.handler = serverless(app);
