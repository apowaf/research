// frontend/src/App.js
import React, { useState, useEffect } from 'react';
// The import for './App.css' is removed as it's not needed and was causing an error.
// All styling is handled by Tailwind CSS, which is linked in the public/index.html file.

// The base URL of our Node.js backend server
// const API_URL = 'http://localhost:3001';
const API_URL = '/.netlify/functions/api';

function App() {
  // State variables to manage the UI
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook to fetch the list of queries when the component mounts
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch(`${API_URL}/api/queries`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQueries(data);
      } catch (err) {
        setError('Failed to load queries from the server.');
        console.error("Fetch queries error:", err);
      }
    };

    fetchQueries();
  }, []); // The empty array ensures this effect runs only once

  // --- Event Handlers ---

  /**
   * Handles the selection of a query from the button list.
   * @param {object} query - The entire query object {name, description, sql}.
   */
  const handleSelectQuery = (query) => {
    setSelectedQuery(query);
    // Reset results and errors when a new query is chosen
    setResults([]);
    setError('');
  };

  /**
   * Executes the currently selected query by calling the backend API.
   */
  const handleRunQuery = async () => {
    if (!selectedQuery) {
      setError('Please select a query to run.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch(`${API_URL}/api/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sql: selectedQuery.sql }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the server returned an error, display it
        throw new Error(data.error || 'An unknown error occurred.');
      }
      
      setResults(data);

    } catch (err) {
      setError(err.message);
      console.error("Run query error:", err);
    } finally {
      // Ensure loading is set to false after the API call completes
      setIsLoading(false);
    }
  };

  // --- Render Functions ---

  /**
   * Renders the results data into an HTML table.
   */
  const renderResultsTable = () => {
    if (results.length === 0) {
      return <p className="text-blue-700 bg-blue-100 border border-blue-200 p-4">Query executed successfully, but returned no results.</p>;
    }

    // Get headers from the keys of the first result object
    const headers = Object.keys(results[0]);

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header) => (
                  <td key={`${rowIndex}-${header}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


  // --- Main Component Render ---

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Faculty Publication SQL Runner (React/Node)</h1>
        <p className="text-md text-gray-600 mt-2">Select a predefined query, view the SQL, and run it against the database via the Node.js server.</p>
      </header>
      
      {/* Query Selection Section */}
      <div className="bg-white p-6 border border-gray-300 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Select a Query</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {queries.length > 0 ? (
            queries.map((query, index) => (
              <div 
                key={index} 
                onClick={() => handleSelectQuery(query)}
                className={`flex flex-col items-start p-4 bg-gray-50 border border-gray-300 cursor-pointer 
                  ${selectedQuery?.sql === query.sql ? 'bg-blue-100 border-blue-500' : ''}`}
              >
                <h3 className="font-semibold text-md text-blue-700">{query.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{query.description}</p>
              </div>
            ))
          ) : (
             <p>Loading queries...</p>
          )}
        </div>
      </div>
      
      {/* Query Execution Section: Only shows if a query is selected */}
      {selectedQuery && (
        <div className="bg-white p-6 border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Query Details</h2>
          <div>
            <h3 className="text-lg font-medium">SQL Query:</h3>
            <pre className="bg-gray-100 border border-gray-200 text-gray-800 p-4 my-2 overflow-x-auto text-sm">
              {selectedQuery.sql}
            </pre>
          </div>
          <button 
            onClick={handleRunQuery}
            disabled={isLoading}
            className="mt-4 w-full sm:w-auto bg-blue-600 text-white font-bold py-2 px-6 hover:bg-blue-700 focus:outline-none disabled:bg-gray-400"
          >
            {isLoading ? 'Running...' : 'Run Query'}
          </button>
        </div>
      )}

      {/* Results Section */}
      <div className="bg-white p-6 border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Query Results</h2>
        {isLoading && <p>Loading results...</p>}
        {error && <p className="text-red-700 bg-red-100 border border-red-200 p-4">{error}</p>}
        {results.length > 0 && !error && renderResultsTable()}
      </div>
    </div>
  );
}

export default App;
