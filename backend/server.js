// backend/server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
// Import the queries array from the centralized data file
const { queries } = require('./data.js');

const app = express();
const PORT = 3001;
const DB_PATH = './database.sqlite';

// --- Middleware ---
app.use(cors()); 
app.use(express.json());

// --- Database Connection ---
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    } else {
        console.log("Successfully connected to the SQLite database.");
    }
});

// --- API Routes ---

// API endpoint to get the list of predefined queries
app.get('/api/queries', (req, res) => {
    // Send the imported queries array as a JSON response
    res.json(queries);
});


// API endpoint to execute a given SQL query
app.post('/api/query', (req, res) => {
    const { sql } = req.body;

    if (!sql) {
        return res.status(400).json({ error: 'SQL query is missing.' });
    }

    // db.all() executes the query and retrieves all resulting rows.
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error("SQL Execution Error:", err.message);
            res.status(500).json({ error: `Query execution failed: ${err.message}` });
        } else {
            res.status(200).json(rows);
        }
    });
});

// --- Server Startup ---
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('exit', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Database connection closed.');
    });
});
