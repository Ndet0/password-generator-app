const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Endpoint to serve the folder.json
app.get('/api/folder', (req, res) => {
  fs.readFile(path.join(__dirname, 'folder.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read file' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Also serve the JSON directly
app.get('/folder.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'folder.json'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
