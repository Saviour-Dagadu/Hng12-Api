const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', async (req, res) => {
  try {
    // Your async code here
    res.json({
      email: "savicane@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Saviour-Dagadu/Hng12-Api.git"
  });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
