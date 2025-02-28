const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Enable CORS to allow the frontend to communicate with the backend
app.use(cors());
app.use(express.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Use your MySQL username
  password: 'pilghiATF5', // Use your MySQL password
  database: 'ecoquestDB' // Your MySQL database name
});

// Connect to the MySQL database
db.connect(err => {
  if (err) {
    console.error('error connecting to the database: ' + err.stack);
    return;
  }
  console.log('connected to MySQL');
});

// Example route to fetch data from MySQL
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database query failed');
      return;
    }
    res.json(result);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});