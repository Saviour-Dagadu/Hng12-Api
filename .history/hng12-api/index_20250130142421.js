const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Endpoint to return the required JSON data
app.get('/', (req, res) => {
  const response = {
    email: 'your-email@example.com', // Replace with your actual email
    current_datetime: new Date().toISOString(), // ISO 8601 formatted timestamp
    github_url: 'https://github.com/yourusername/your-repo' // Replace with your actual GitHub URL
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
