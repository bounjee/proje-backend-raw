const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to update the text file
app.post('/update-text', (req, res) => {
  const { newText } = req.body;

  // Path to your text file
  const filePath = "C:\\Users\\baris\\Desktop\\seslendirme_kismi\\read_text.txt";

  // Write to the file
  fs.writeFile(filePath, newText, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      return res.status(500).json({ message: 'Failed to update file' });
    }
    res.status(200).json({ message: 'File updated successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
