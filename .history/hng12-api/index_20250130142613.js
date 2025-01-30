const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Endpoint to return the required JSON data
app.get('/', (req, res) => {
  const response = {
    email: 'savicane@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Saviour-Dagadu/Hng12-Api.git' 
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
