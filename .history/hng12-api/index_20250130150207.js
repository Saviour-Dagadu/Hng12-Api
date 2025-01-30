const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Your API endpoint
app.get('/', (req, res) => {
  res.json({
    email: "your-email@example.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/yourusername/your-repo"
  });
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
