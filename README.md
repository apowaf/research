React & Node.js SQL Runner Setup
Follow these steps carefully to get the application running locally.

Prerequisites
You must have Node.js installed on your computer. This will also install npm (Node Package Manager).

Step 1: Create Project Structure
First, create a main folder for your project and then create backend and frontend subfolders inside it.

# Create and enter the main project folder
mkdir sql-app
cd sql-app

# Create folders for backend and frontend
mkdir backend
mkdir frontend

Step 2: Backend Setup (Node.js Server)
Navigate into the backend folder and follow these steps.

Go to the backend directory:

cd backend

Initialize a Node.js project: This creates a package.json file.

npm init -y

Install server dependencies:

npm install express sqlite3 cors

Create Server Files: Inside the backend folder, create three files: data.js, setupDatabase.js, and server.js. Copy the code from the corresponding documents below into these files.

Create and Populate the Database: Run the setup script once. This will create a database.sqlite file.

node setupDatabase.js

You should see "Database setup complete." in your terminal.

Start the Backend Server:

node server.js

Your backend is now running at http://localhost:3001. Leave this terminal window open.

Step 3: Frontend Setup (React App)
Open a new terminal window and navigate into the frontend folder.

Go to the frontend directory:

# Make sure you are in the main 'sql-app' folder first, then:
cd frontend

Important: Ensure this directory is empty before running the next commands.

(Windows PowerShell Only) Set Execution Policy: If you encounter a security error about running scripts, run this command first. This change only applies to the current terminal window.

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Create a new React application:

npx create-react-app .

(Note: The . installs it in the current frontend folder. This may take a few minutes.)

Replace Generated Files: After the command finishes, create-react-app will have created several files. Now, replace the contents of the following files with the code I provided in the other documents:

frontend/public/index.html

frontend/src/App.js

frontend/src/App.css

Start the Frontend App:

npm start

This will automatically open http://localhost:3000 in your web browser, where you will see your running application.