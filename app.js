<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD with Docker & GitHub Actions is working!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
=======
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD with Docker & GitHub Actions is working!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
>>>>>>> 4b897444b443579f23081f318acd40a8199d73d8
});