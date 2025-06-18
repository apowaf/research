// backend/functions/api/server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const serverless = require('serverless-http');
const cors = require('cors');
const path = require('path');

// Import queries from the data file, which should be one level up
const { queries } = require('../../data.js');

const app = express();
// Note: We need to construct the path to the database file
// It will be at the root of the deployed function folder
const DB_PATH = path.resolve(__dirname, '..', '..', 'database.sqlite');

// --- Middleware ---
app.use(cors()); 
app.use(express.json());

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    } else {
        console.log("Successfully connected to the SQLite database.");
    }
});

// --- API Routes ---
// We prefix routes with '/api' to match our frontend calls
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

// Use the router for all API requests
app.use('/.netlify/functions/api', router);

// Export the handler for Netlify
module.exports.handler = serverless(app);