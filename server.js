const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, Azure App Service!' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running.');
});
