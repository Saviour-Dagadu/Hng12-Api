const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the API!',
  });
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
