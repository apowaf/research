// backend/setupDatabase.js

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
// Import data from the new data.js file
const { databaseData } = require('./data.js');

// The path for our SQLite database file
const DB_PATH = './database.sqlite';

// This function will set up the database.
const setupDatabase = () => {
    // Delete the old database file if it exists, to start fresh
    if (fs.existsSync(DB_PATH)) {
        fs.unlinkSync(DB_PATH);
    }
    
    // Create a new database connection
    const db = new sqlite3.Database(DB_PATH, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Connected to the SQLite database.');
    });

    // Use serialize to ensure statements run in order
    db.serialize(() => {
        console.log('Creating tables...');
        db.run(`CREATE TABLE Department (department_id INTEGER PRIMARY KEY, name TEXT NOT NULL)`);
        db.run(`CREATE TABLE Faculty (faculty_id INTEGER PRIMARY KEY, name TEXT NOT NULL, department_id INTEGER, designation TEXT, email TEXT, FOREIGN KEY (department_id) REFERENCES Department(department_id))`);
        db.run(`CREATE TABLE Student (student_id INTEGER PRIMARY KEY, name TEXT NOT NULL, department_id INTEGER, email TEXT, FOREIGN KEY (department_id) REFERENCES Department(department_id))`);
        db.run(`CREATE TABLE Publication (publication_id INTEGER PRIMARY KEY, title TEXT NOT NULL, type TEXT NOT NULL CHECK(type IN ('Journal', 'Conference', 'Book Chapter', 'Patent')), indexing TEXT CHECK(indexing IN ('SCI', 'SCOPUS', 'IEEE', 'None')), year INTEGER, is_student_paper INTEGER, mentor_id INTEGER, FOREIGN KEY (mentor_id) REFERENCES Faculty(faculty_id))`);
        db.run(`CREATE TABLE Faculty_Publication (faculty_id INTEGER, publication_id INTEGER, PRIMARY KEY (faculty_id, publication_id), FOREIGN KEY (faculty_id) REFERENCES Faculty(faculty_id), FOREIGN KEY (publication_id) REFERENCES Publication(publication_id))`);
        db.run(`CREATE TABLE Student_Publication (student_id INTEGER, publication_id INTEGER, mentor_id INTEGER, PRIMARY KEY (student_id, publication_id), FOREIGN KEY (student_id) REFERENCES Student(student_id), FOREIGN KEY (publication_id) REFERENCES Publication(publication_id), FOREIGN KEY (mentor_id) REFERENCES Faculty(faculty_id))`);
        db.run(`CREATE TABLE Conference (conference_id INTEGER PRIMARY KEY, name TEXT NOT NULL, year INTEGER, location TEXT)`);
        db.run(`CREATE TABLE Conference_Attendance (faculty_id INTEGER, conference_id INTEGER, PRIMARY KEY (faculty_id, conference_id), FOREIGN KEY (faculty_id) REFERENCES Faculty(faculty_id), FOREIGN KEY (conference_id) REFERENCES Conference(conference_id))`);

        console.log('Populating tables...');
        // Loop through all tables in the data object and insert their data
        for (const [tableName, tableData] of Object.entries(databaseData)) {
            const keys = Object.keys(tableData[0]);
            const placeholders = keys.map(() => '?').join(',');
            const stmt = db.prepare(`INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${placeholders})`);
            
            for (const row of tableData) {
                stmt.run(Object.values(row));
            }
            stmt.finalize();
        }
        
        console.log('Database setup complete.');
    });

    // Close the database connection
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
    });
};

// This allows running the script directly from the command line
if (require.main === module) {
    setupDatabase();
}
